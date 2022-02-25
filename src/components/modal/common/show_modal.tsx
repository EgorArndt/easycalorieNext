import { withModalConfig, ModalInit } from '@hocs'
import { ModalCollection } from 'components/modal/ModalCollection'
import { MODAL_NAMES } from 'components/modal/constants'

const showModal = ({ ...props }: ModalInit) => {
  const componentId = MODAL_NAMES.showModal
  const component = withModalConfig({ componentId, ...props })

  ModalCollection.open({
    component,
    componentId,
  })
}

export default showModal
