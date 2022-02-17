import React, { FC } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

import { withStyles, WithStylesProps } from '../../hocs/with_styles'
import { ButtonBase } from '../button/base'
import { ButtonProps } from '../button'

type LinkProps = {
    to: string
} & Omit<NextLinkProps, 'href'> & Omit<ButtonProps, 'type'> 

const _Link: FC<LinkProps> = ({ 
    to, 
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
    ...props 
}: LinkProps) => (
    <NextLink 
        href={to} 
        as={as} 
        replace={replace} 
        scroll={scroll} 
        shallow={shallow} 
        passHref={passHref} 
        prefetch={prefetch} 
        locale={locale}
    >
        <ButtonBase as='a' {...props} />
    </NextLink>
)

const Link = withStyles<LinkProps & WithStylesProps>(_Link, 'link')

export default Link
