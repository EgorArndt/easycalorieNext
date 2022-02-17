import React, { FC, ReactNode } from 'react'

import { ArrowLeft as ArrowDown } from '../../components/icons'
import accordion from './styles.module.css'

type AccordionProps = {
    label?: string | ReactNode
    children?: ReactNode
    trigger?: string | ReactNode
    disabled?: boolean
    forceOpen?: boolean
}

const Accordion: FC<AccordionProps> = ({ label, children, trigger, disabled, forceOpen = false }: AccordionProps) => (
    <div className={accordion.accordion}>
        <div className={accordion.item}>
            <input type="checkbox" className={accordion.toggler} disabled={disabled} checked={forceOpen} />
            <span className={accordion.trigger}>
                {label}
                {trigger ? trigger : <ArrowDown className={accordion.arrow} />}
            </span>
            <ul className={accordion.dropdown}>
                {children}
            </ul>
        </div>
    </div>
)

export default Accordion