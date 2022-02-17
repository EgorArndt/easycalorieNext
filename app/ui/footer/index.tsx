import { FC, ReactNode } from 'react'
import cn from 'classnames'

import { withStyles, WithStylesProps } from '../../hocs/with_styles'

type FooterProps = {
    children?: ReactNode | ReactNode[]
    className?: string
} 

const _Footer: FC<FooterProps> = ({ 
    children, 
    className, 
    ...props 
}: FooterProps) => {
    return (
        <footer
            className={cn('footer', className)}
            {...props}
        >
            {children}
            <style global jsx>{`
                .footer {
                    width: 100vw;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 3rem;
                    padding-inline: auto;
                }
            `}</style>
        </footer>
    )
}

const Footer = withStyles<FooterProps & WithStylesProps>(_Footer, null, true)

export default Footer