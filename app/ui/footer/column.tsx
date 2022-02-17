import { FC, ReactNode } from 'react'

import { Accordion, Box } from '@ui'
import { withStyles, WithStylesProps } from '../../hocs/with_styles'

type FooterColumnProps = {
    children?: ReactNode[]
    header?: ReactNode
}

const _FooterColumn: FC<FooterColumnProps> = ({ children, header, ...props }: FooterColumnProps) => {
    return (
        <Accordion trigger={header} forceOpen disabled>
            <Box column {...props}>
                {children}
            </Box>
        </Accordion>
    )
}

const FooterColumn = withStyles<FooterColumnProps & WithStylesProps>(_FooterColumn, null, true)

export default FooterColumn