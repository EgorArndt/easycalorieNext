import { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { withModalConfig } from '@hocs'
import { ModalCollection } from 'components/modal/ModalCollection'
import { MODAL_NAMES } from 'components/modal/constants'
import Editor from './helpers/Editor'
import FooterActions from './helpers/FooterActions'
import TotalLine from 'components/helpers/TotalLine'
import ErrorPopup from 'components/helpers/ErrorPopup'
import { Box, Button, GridRow, Input } from '@ui'
import { Plus } from '@icons'
import { useBreakpoints } from '@hooks'
import { ingredientFields, labelFields, dbKeys } from './constants'
import { createMeal as dispatchMealToDatabase } from '@lib/db'

type Ingredient = {
  ingredientName: string
  carbs: string
  protein: string
  fat: string
  calories: string
}
type Labels = { labels: string }
type Comment = { comment: string }

type UnformattedMealData = Ingredient | Labels | Comment
type MealData = {
  ingredients?: Array<Ingredient>
  labels?: Array<string>
  comment?: string
}

const CreateMealModal = ({ onClose }: { onClose: () => void }) => {
  const [isAddingIngredient, setIsAddingIngredient] = useState(false)
  const [isAddingLabel, setIsAddingLabel] = useState(false)
  const [isAddingComment, setIsAddingComment] = useState(false)
  const [mealData, setMealData] = useState(null as null | MealData)
  const { isXs, isS, isM } = useBreakpoints()
  const isMobile = isXs || isS || isM
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm()

  const modalRows = [
    {
      dbKey: dbKeys.ingredients,
      name: 'Add ingredient',
      isEditing: isAddingIngredient,
      cb: setIsAddingIngredient,
      fields: ingredientFields,
      placeholder: 'None added',
    },
    {
      dbKey: dbKeys.labels,
      name: 'Add label',
      isEditing: isAddingLabel,
      cb: setIsAddingLabel,
      fields: labelFields,
      placeholder: 'None added',
    },
    {
      dbKey: dbKeys.comment,
      name: 'Add comment',
      isEditing: isAddingComment,
      cb: setIsAddingComment,
      fields: null,
      placeholder: 'None added',
    },
  ]

  const onModalSave = (data: MealData) => {
    dispatchMealToDatabase(mealData ? { ...mealData, ...data } : { ...data })
    onClose()
    toast('Your meal has been added!', { type: 'success' })
  }

  const formatData = (data: UnformattedMealData, dbKey: dbKeys) => {
    if (dbKey === 'ingredients') {
      const currentIngredients = mealData && mealData.ingredients
      const mutateOrInit = currentIngredients
        ? [...currentIngredients, data]
        : new Array(data)
      setMealData({ ...mealData, [dbKey as string]: mutateOrInit })
    }
    if (dbKey === 'labels') {
      const currentLabels = mealData && mealData.labels
      const mutateOrInit = currentLabels
        ? [...currentLabels, (data as Labels).labels]
        : new Array((data as Labels).labels)
      setMealData({ ...mealData, [dbKey as string]: mutateOrInit })
    }
    if (dbKey === 'comment') {
      setMealData({ ...mealData, [dbKey as string]: data })
    }
  }

  useEffect(() => {
    setFocus('mealName')
  }, [])

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
          ({ dbKey, name, isEditing, cb, fields, placeholder }) => (
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
                spacing={isMobile && isEditing && { pb: 0.5 }}
              >
                <Button
                  palette='inherit'
                  variant='ghost'
                  size='s'
                  before={<Plus />}
                  width='100%'
                  align='left'
                  onClick={() => cb(!isEditing)}
                >
                  {name}
                </Button>
              </Box>
              {isEditing ? (
                <Editor
                  fields={fields}
                  onSave={(data: UnformattedMealData) =>
                    formatData(data, dbKey)
                  }
                  onCancel={() => cb(false)}
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
        cb1={handleSubmit((data) => onModalSave(data))}
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
