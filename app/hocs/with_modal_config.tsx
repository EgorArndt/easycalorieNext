import React from 'react'

import { Modal, Notification } from '../ui'
import { ModalCollection } from '../components/modal/modal_collection'
import { MODAL_NAMES } from '../components/modal/constants'
import { ModalProps } from '../ui/modal'
import { NotificationProps } from '../ui/notification'

export type ContentProps = { 
  isVisible?: boolean 
  onClose: () => void  
  closable?: boolean
  [key: string]: unknown 
}

// TODO any
type WithModalProps = {
  containerType?: 'modal' | 'notification'
  componentId: MODAL_NAMES
  content?: React.ComponentClass<ContentProps> | React.FC<ContentProps> | React.ReactNode | any
} 

type ContainerProps = Omit<ModalProps | NotificationProps, 'onClose'>

export type ModalInit<T = Record<string, unknown>> = Omit<WithModalProps, 'componentId'> & ContainerProps & T

export const withModalConfig = ({
  containerType = 'modal',
  componentId,
  content: ModalContent,
  ...containerProps
}: WithModalProps & ContainerProps) => {
  const ModalElement = ({ isVisible, ...contentProps }: ContentProps) => {
    const onClose = () => ModalCollection.close(componentId)
    const enhancedContent = ModalContent && (React.isValidElement(ModalContent) ? ModalContent : <ModalContent {...contentProps} onClose={onClose} />)
    const enhancedContainerProps = { ...containerProps, content: enhancedContent, onClose, isVisible }
    
    if (containerType === 'modal') return <Modal {...enhancedContainerProps} />
    
    return <Notification {...enhancedContainerProps} />
  }

  ModalElement.displayName = `${componentId}_from_withModalConfig`
  return ModalElement
}
