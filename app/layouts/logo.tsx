// import Image from 'next/image'
import { withTheme } from '@emotion/react'

import { Link } from '@ui'
import { AppTheme } from '../../styles/theme/models'
// import logo from '../../../public/logo.png'

type LogoProps = {
    color?: 'primary' | 'secondary' | 'tertiary' | 'default'
    theme?: AppTheme
}

const _Logo = ({ color = 'default', theme }: LogoProps) => (
    <Link to="/" className='logo'>
        {/* <Image layout='intrinsic' src={logo} />  */}
        Easycalorie
        <style global jsx>{`
            @import url('https://fonts.cdnfonts.com/css/true-lies');
            .logo {
                align-items: center;
                border: 0;
                display: flex;
                flex-flow: row nowrap;
                height: 50%;
                width: auto;
                font-family: 'True lies', sans-serif !important;
                font-size: ${theme?.readonly.fontSize('header')};
                color: ${theme?.mutatable.textColors[color]};
                transform: rotate(-4deg);
            }
        `}</style>
    </Link>
)

export const Logo = withTheme(_Logo)

