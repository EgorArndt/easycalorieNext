import { ModalCollection } from './../../modal_collection'
import { withModalConfig, ModalInit } from '../../../../hocs/with_modal_config'
import { MODAL_NAMES } from '../../constants'

const displayNotification = ({ 
    title, 
    subtitle,
    content,
    ...props
}: ModalInit) => {
    const componentId = MODAL_NAMES.deleted
    const component = withModalConfig({ 
        containerType: 'notification',
        content, 
        componentId,
        title, 
        subtitle,
        closable: true, 
        palette: 'secondary', 
        spacing: {p: 1, pl: 0},
        ...props
    })

    ModalCollection.open({
        component,
        componentId,
    })
}
  
export default displayNotification