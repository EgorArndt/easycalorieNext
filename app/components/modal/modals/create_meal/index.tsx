import React from 'react'

import { MODAL_NAMES } from '../../constants'
import { withModalConfig } from '../../../../hocs/with_modal_config'
import { ModalCollection } from '../../modal_collection'
import { Box } from '../../../../ui'

const Modal = ({onClose}: {onClose: () => void}) => {
    return (
      <Box columnItemSizes={[15, 85]}>
        create a meal asshole
      </Box>
    )
}

export const createMealModal = () => {
  const componentId = MODAL_NAMES.createMeal
  const content = Modal
  const component = withModalConfig({ componentId, content, closable: true, size: 'l', palette: 'secondary' })
  ModalCollection.open({
    component,
    componentId,
  })
}
  