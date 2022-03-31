import { FC, ReactNode, SyntheticEvent } from 'react'

import { withModalConfig, ModalInit } from '@hocs'
import { ModalCollection } from 'components/modal/ModalCollection'
import { MODAL_NAMES } from 'components/modal/constants'
import { Box, Button, Checkbox, Label } from '@ui'

type ConfirmActionProps = {
  proceedText?: string
  cancelText?: string
  onProceed: () => void
  onCancel?: () => void
  children?: ReactNode
}

const ConfirmActionModal: FC<ConfirmActionProps & { onClose: () => void }> = ({
  proceedText = 'Proceed',
  cancelText = 'Cancel',
  onProceed,
  onCancel,
  onClose,
  children,
}: ConfirmActionProps & { onClose: () => void }) => {
  const onClickHandler = (txt: string) => {
    txt === proceedText ? onProceed() : onCancel && onCancel()
    onClose()
  }

  return (
    <Box column center spacing={{ py: 1 }} childrenSpacing={{ mt: 1 }}>
      {children}
      <Box fullSize align='space-evenly'>
        {[proceedText, cancelText].map((txt) => (
          <Button
            key={txt}
            onClick={(e: SyntheticEvent) => {
              e.preventDefault(), onClickHandler(txt)
            }}
            palette={txt === proceedText ? 'success' : 'error'}
          >
            {txt}
          </Button>
        ))}
      </Box>
      <Label id='confirm_action' center spacing={{ mt: 2 }}>
        <Checkbox checked={false} onChange={() => null} />
        Don&apos;t ask me again
      </Label>
    </Box>
  )
}

const confirmAction = ({
  title = 'Confirm action',
  ...confirmProps
}: ModalInit<ConfirmActionProps>) => {
  const componentId = MODAL_NAMES.confirmAction
  const component = withModalConfig({
    content: ConfirmActionModal,
    componentId,
    title,
    closable: true,
    size: 's',
    palette: 'secondary',
    spacing: { p: 1, pt: 0 },
  })

  ModalCollection.open({
    component,
    componentId,
    props: { ...confirmProps },
  })
}

export default confirmAction
