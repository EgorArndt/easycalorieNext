import React from 'react'

import { Modal, ModalProps } from '@ui'
import { ModalCollection } from 'components/modal/ModalCollection'
import { MODAL_NAMES } from 'components/modal/constants'

export type ContentProps = {
  isVisible: boolean
  onClose: () => void
  [key: string]: unknown
}

type WithModalProps = {
  componentId: MODAL_NAMES
  content?: React.ComponentClass<any> | React.FC<any>
}

export type ModalInit<T = Record<string, unknown>> = Omit<
  WithModalProps,
  'componentId'
> &
  ModalProps &
  T

const withModalConfig = ({
  componentId,
  content: ModalContent,
  ...modalProps
}: WithModalProps & ModalProps) => {
  const ModalElement = ({ isVisible, ...contentProps }: ContentProps) => {
    const onClose = () => ModalCollection.close(componentId)
    const enhancedContent =
      ModalContent &&
      (React.isValidElement(ModalContent) ? (
        ModalContent
      ) : (
        <ModalContent {...contentProps} onClose={onClose} />
      ))
    const enhancedModalProps = {
      ...modalProps,
      content: enhancedContent,
      onClose,
      isVisible,
    }

    return <Modal {...enhancedModalProps} />
  }

  ModalElement.displayName = `${componentId}_from_withModalConfig`
  return ModalElement
}

export default withModalConfig
