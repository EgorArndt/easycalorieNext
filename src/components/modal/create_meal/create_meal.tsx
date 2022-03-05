import { useState } from 'react'

import { withModalConfig, ModalInit } from '@hocs'
import { ModalCollection } from 'components/modal/ModalCollection'
import { MODAL_NAMES } from 'components/modal/constants'
import Editor from './helpers/Editor'
import FooterActions from './helpers/FooterActions'
import TotalLine from 'components/helpers/TotalLine'
import { Box, Button, GridRow, Input } from '@ui'
import { Plus } from '@icons'
import {useBreakpoints} from '@hooks'

const CreateMealModal = ({ onClose }: { onClose: () => void }) => {
  const [isAddingIngredient, setIsAddingIngredient] = useState(false)
  const [isAddingLabel, setIsAddingLabel] = useState(false)
  const [isAddingComment, setIsAddingComment] = useState(false)
  const { isXs, isS} = useBreakpoints()
  const isMobile = isXs||isS

  const ingredientFields = [
    { name: 'Ingredient name' },
    { name: 'Carbs' },
    { name: 'Protein' },
    { name: 'Fat' },
    { name: 'Calories' },
  ]

  const labelFields = [
    {name: 'Custom identifiers'}
  ]

  const rows = [
    {
      name: 'Add ingredient',
      isEditing: isAddingIngredient,
      cb: setIsAddingIngredient,
      fields: ingredientFields,
      placeholder: 'How about potatos?',
    },
    {
      name: 'Add label',
      isEditing: isAddingLabel,
      cb: setIsAddingLabel,
      fields: labelFields,
      placeholder: 'e.g. Breakfast, Monday...',
    },
    {
      name: 'Add comment',
      isEditing: isAddingComment,
      cb: setIsAddingComment,
      fields: null,
      placeholder: 'Get creative!',
    },
  ]

  return (
    <Box
      column
      gap='1rem'
      align='left'
      fontSize='body1'
      childrenSpacing={{ p: 1, pb: 0 }}
    >
      <Input placeholder='Give your meal a name...' fontSize='body2' />
      <Box column width='100%' childrenSpacing={{ p: 1 }}>
        {rows.map(({ name, isEditing, cb, fields, placeholder }) => (
          <GridRow key={name} borderBottom rowItemSizes={isMobile ? [24] : [6, 18]} width='100%' column={isMobile}>
            <Box width='100%' borderRight={!isMobile} spacing={isMobile&& isEditing && {pb: 0.5}}>
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
                onSave={() => null}
                onCancel={() => cb(false)}
                spacing={isMobile ? {mt: 1} : {ml: 2}}
              />
            ) : !isMobile && (
              <Box center width='100%'>
                {placeholder}
              </Box>
            )}
          </GridRow>
        ))}
      </Box>
      <TotalLine c={350} p={350} f={350} cal={350} />
      <FooterActions palette='secondary' borderTop cb1={() => null} cb2={onClose} />
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
