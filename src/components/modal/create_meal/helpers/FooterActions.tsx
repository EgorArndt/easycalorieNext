import { Box, Button, BoxProps } from '@ui'

type FooterActionsProps = {
    cb1: () => void 
    cb2: () => void 
} & BoxProps

const FooterActions = ({ cb1, cb2, ...props }: FooterActionsProps) => 
    <Box
        gap='2rem'
        spacing={{ p: 1 }}
        width='100%'
        center
        {...props}
    >
        <Button width={150} palette='success' size='s' onClick={cb1}>
            Save
        </Button>
        <Button
            width={150}
            palette='error'
            variant='outlined'
            size='s'
            onClick={cb2}
        >
            Cancel
        </Button>
    </Box>

export default FooterActions