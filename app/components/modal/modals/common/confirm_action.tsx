
import { ReactNode, SyntheticEvent } from 'react'

import { MODAL_NAMES } from '../../constants'
import { withModalConfig, ModalInit } from '../../../../hocs/with_modal_config'
import { ModalCollection } from '../../modal_collection'
import { Box, Button, Checkbox, Label } from '../../../../ui'

type ConfirmActionProps = {
    proceedText?: string
    cancelText?: string
    onProceed: () => void
    onCancel?: () => void
    children?: ReactNode
}

const ConfirmActionModal = ({
    proceedText = 'Proceed',
    cancelText = 'Cancel',
    onProceed, 
    onCancel, 
    onClose,
    children,
}: ConfirmActionProps & { onClose: () => void }
) => {
    const callback = (txt: string) => {
        txt === proceedText ? onProceed() : onCancel && onCancel()
        onClose()
    }

    return (
        <Box column center spacing={{py: 1}} childrenSpacing={{mt: 1}}>
            {children}
            <Box fullSize align='space-evenly'>
                {
                    [proceedText, cancelText].map(txt => (
                        <Button 
                            key={txt} 
                            onClick={(e: SyntheticEvent) => {e.preventDefault(), callback(txt)}} 
                            palette={txt === proceedText ? 'success' : 'error'}
                        >
                            {txt}
                        </Button>
                    ))
                }
            </Box>
            <Label id='confirm_action' center spacing={{mt: 2}}>
                <Checkbox value='0' onChange={() => null} />
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
        palette: 'primary', 
        spacing: {p: 1, pt: 0} 
    })

    ModalCollection.open({
        component,
        componentId,
        props: {...confirmProps}
    })
}

export default confirmAction