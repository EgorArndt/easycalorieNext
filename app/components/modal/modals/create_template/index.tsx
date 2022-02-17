import { useState } from 'react'

import { MODAL_NAMES } from '../../constants'
import { withModalConfig } from '../../../../hocs/with_modal_config'
import { ModalCollection } from '../../modal_collection'
import { CreateTemplateModalContent } from './create_template'
import { Header, Tablist, Button, Tabpanel } from '../../../../ui'
import { ImportCloud, Plus, Present, Star, ArrowLeft } from '../../../icons'
import { utilityClasses } from '../../../../../styles/themes/constants'

const Modal = ({ onClose }: {onClose: () => void}) => {
  const [componentOnDisplay, setComponentOnDisplay] = useState(1)
  const headerTitle = [
    'See what’s new',
    'Create a template',
    'Template Universe',
    'Import Project',
  ]

  const menuHeader = (
    <Button 
      variant='bgless'
      palette='inherit'
      onClick={onClose} 
      spacing={{my: 1}} 
      before={<ArrowLeft />}  
      noWrap
      style={{width: '100%'}}
    >
      Back to dashboard
    </Button>
  )

  const menuButtons = [
    {icon: <Present />, text: "What's new", active: 0},
    {icon: <Plus />, text: "Create a template", active: 1},
    {icon: <Star />, text: "Explore templates", active: 2},
    {icon: <ImportCloud />, text: "Import template", active: 3},
  ].map(({icon, text, active}) => 
    <Button 
      key={text} 
      palette='inherit'
      className={componentOnDisplay === active ? utilityClasses.active : ''} 
      onClick={() => setComponentOnDisplay(active)} 
      before={icon} 
      align='left' 
      noWrap
    >
      {text}
    </Button>
)

  return (
    <Tablist 
      minWidth={180} 
      fontSize='body1' 
      header={menuHeader} 
      items={menuButtons} 
      palette='secondary' 
      ratio={15}
    >
      <Tabpanel column spacing={{pb: 1}} childrenSpacing={{mx: 1}}>
        <Header title={headerTitle[componentOnDisplay]} color='secondary' />
        {componentOnDisplay === 1 && <CreateTemplateModalContent />}
      </Tabpanel>
    </Tablist>
  )
}

export const createTemplateModal = () => {
  const componentId = MODAL_NAMES.createTemplate
  const content = Modal
  const component = withModalConfig({ componentId, content, closable: true, size: 'l', palette: 'primary' })
  ModalCollection.open({
    component,
    componentId,
  })
}
