import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

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
import { ingredientFields, labelFields } from './constants'

const CreateMealModal = ({ onClose }: { onClose: () => void }) => {
  const [isAddingIngredient, setIsAddingIngredient] = useState(false)
  const [isAddingLabel, setIsAddingLabel] = useState(false)
  const [isAddingComment, setIsAddingComment] = useState(false)
  const { isXs, isS, isM } = useBreakpoints()
  const isMobile = isXs || isS || isM

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm()

  const rows = [
    {
      name: 'Add ingredient',
      isEditing: isAddingIngredient,
      cb: setIsAddingIngredient,
      fields: ingredientFields,
      placeholder: 'None added',
    },
    {
      name: 'Add label',
      isEditing: isAddingLabel,
      cb: setIsAddingLabel,
      fields: labelFields,
      placeholder: 'None added',
    },
    {
      name: 'Add comment',
      isEditing: isAddingComment,
      cb: setIsAddingComment,
      fields: null,
      placeholder: 'None added',
    },
  ]

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
        {rows.map(({ name, isEditing, cb, fields, placeholder }) => (
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
                onSave={(data) => console.log(data)}
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
        ))}
      </Box>
      <TotalLine c={0} p={0} f={0} cal={0} />
      <FooterActions
        palette='secondary'
        borderTop
        cb1={handleSubmit((data) => console.log(data))}
        cb2={onClose}
      />
    </Box>
  )
}
// {// title = 'Confirm action'}: ModalInit
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
    // props: { ...createMealProps },
  })
}

export default createMeal
