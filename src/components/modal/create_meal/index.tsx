import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { mutate } from 'swr'
import { concat } from 'lodash-es'

import { withModalConfig } from '@hocs'
import { ModalCollection } from 'components/modal/ModalCollection'
import Editor from './helpers/Editor'
import FooterActions from './helpers/FooterActions'
import { TotalLine, ErrorPopup } from 'components/helpers'
import { Box, Button, GridRow, Input } from '@ui'
import { Plus } from '@icons'
import { useBreakpoints } from '@hooks'
import { useAuth } from '@lib/auth'
import { createMeal as dispatchMealToDatabase } from '@lib/db'
import { Meal } from '@lib/models'
import { extract } from '@utils'
import { meals } from 'constants/api'
import { ingredientFields, labelFields, MealKeys } from './constants'
import { MODAL_NAMES } from 'components/modal/constants'
import type { UnformattedMealDataSlice, FormattedFullMealData } from './models'

const CreateMealModal = ({ onClose }: { onClose: () => void }) => {
  const [mealData, setMealData] = useState({} as FormattedFullMealData)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    defaultValues: {
      mealName: '',
    },
  })
  const { user } = useAuth()

  const [isAddingIngredient, setIsAddingIngredient] = useState(false)
  const [isAddingLabel, setIsAddingLabel] = useState(false)
  const [isAddingComment, setIsAddingComment] = useState(false)

  const { isXs, isS, isM } = useBreakpoints()
  const isMobile = isXs || isS || isM

  const modalRows = [
    {
      mealProp: MealKeys.ingredients,
      name: 'Add ingredient',
      isAdding: isAddingIngredient,
      setIsAdding: setIsAddingIngredient,
      fields: ingredientFields,
      placeholder: 'None added',
    },
    {
      mealProp: MealKeys.labels,
      name: 'Add label',
      isAdding: isAddingLabel,
      setIsAdding: setIsAddingLabel,
      fields: labelFields,
      placeholder: 'None added',
    },
    {
      mealProp: MealKeys.comment,
      name: 'Add comment',
      isAdding: isAddingComment,
      setIsAdding: setIsAddingComment,
      fields: null,
      placeholder: 'None added',
    },
  ]

  const onModalSave = (m: { mealName: string }) => {
    if (user && user.name && user.uid) {
      const { ingredients = [], labels = '', comment = '' } = mealData
      const newMeal: Meal = {
        name: m.mealName,
        id: m.mealName,
        total: {},
        author: user.name,
        authorId: user.uid,
        createdAt: new Date().toISOString(),
        ingredients,
        labels,
        comment,
      }
      dispatchMealToDatabase(newMeal)
      mutate(
        meals,
        async (data: Array<Meal>) => {
          return [...data, newMeal]
        },
        false
      )
      onClose()
      toast('Your meal has been added!', { type: 'success' })
    }
  }

  const formatAndSave = (data: UnformattedMealDataSlice, key: MealKeys) => {
    const inputValue = extract(data, key) || data
    const currentState = mealData[key] || []
    const mergedValue = concat(currentState, inputValue)

    setMealData({
      ...mealData,
      [key]:
        key === MealKeys.labels
          ? mergedValue.join(' ')
          : key === MealKeys.comment
          ? mergedValue[1]
          : mergedValue,
    })
  }

  useEffect(() => setFocus('mealName'), [])

  useEffect(() => {
    return () => {
      setIsAddingIngredient(false)
      setIsAddingLabel(false)
      setIsAddingComment(false)
    }
  }, [isMobile])

  return (
    <Box column gap='1rem' align='left' fontSize='body1'>
      <Input
        placeholder='Give your meal a name...'
        fontSize='body2'
        spacing={{ p: 1, pb: 0 }}
        size='l'
        {...register('mealName', {
          required: 'Name is required',
          maxLength: {
            value: 20,
            message: "The name can't contain more than 20 symbols.",
          },
        })}
      />
      {errors.mealName && (
        <ErrorPopup
          text={errors.mealName.message}
          variant='contained'
          spacing={{ mx: 1 }}
        />
      )}
      <Box column width='100%' spacing={{ p: 1 }} childrenSpacing={{ p: 1 }}>
        {modalRows.map(
          ({ mealProp, name, isAdding, setIsAdding, fields, placeholder }) => (
            <GridRow
              key={name}
              borderBottom
              rowItemSizes={isMobile ? [24] : [6, 18]}
              width='100%'
              column={isMobile}
            >
              <Box
                width='100%'
                borderRight={!isMobile}
                spacing={isMobile && isAdding && { pb: 0.5 }}
              >
                <Button
                  palette='inherit'
                  variant='ghost'
                  size='s'
                  before={<Plus />}
                  width='100%'
                  align='left'
                  onClick={() => setIsAdding(!isAdding)}
                >
                  {name}
                </Button>
              </Box>
              {isAdding ? (
                <Editor
                  fields={fields}
                  onSave={(data: UnformattedMealDataSlice) =>
                    formatAndSave(data, mealProp)
                  }
                  onCancel={() => setIsAdding(false)}
                  spacing={isMobile ? { mt: 1.5 } : { ml: 2 }}
                />
              ) : (
                !isMobile && (
                  <Box center width='100%'>
                    {placeholder}
                  </Box>
                )
              )}
            </GridRow>
          )
        )}
      </Box>
      <TotalLine c={0} p={0} f={0} cal={0} />
      <FooterActions
        palette='secondary'
        borderTop
        cb1={handleSubmit((mealName) => onModalSave(mealName))}
        cb2={onClose}
      />
    </Box>
  )
}
const createMeal = () => {
  const componentId = MODAL_NAMES.createMeal
  const component = withModalConfig({
    content: CreateMealModal,
    componentId,
    closable: true,
    size: 'm',
    palette: 'primary',
  })

  ModalCollection.open({
    component,
    componentId,
  })
}

export default createMeal
