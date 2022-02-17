import React, { FC, ReactNode } from 'react'
import cn from 'classnames'

import styles from './styles.less'
import { withStyles, withStyles } from '../../hocs/with_styles'

type HamburgerProps = {
    children?: ReactNode | ReactNode[]
    menu?: ReactNode
} & withStyles

const _Hamburger: FC<HamburgerProps> = ({children, menu, className, ...props}: HamburgerProps) => (
    <div className={styles.menuWrap}>
        <input type="checkbox" className={styles.toggler} />
        <div className={cn(className, styles.hamburger)} {...props}><div></div></div>
        {menu &&
            <div className={styles.menu}>
                <div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        }
    </div>
)

const Hamburger = withStyles(_Hamburger, null)

export default Hamburger