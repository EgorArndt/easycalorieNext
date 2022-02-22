import { FC, ReactNode } from 'react'

import { ArrowLeft as ArrowDown } from '@icons'
import accordion from './styles.module.css'

type AccordionProps = {
  label?: string | ReactNode
  children?: ReactNode
  trigger?: string | ReactNode
  disabled?: boolean | null
  forceOpen?: true | null
}

const Accordion: FC<AccordionProps> = ({
  label,
  children,
  trigger,
  disabled,
  forceOpen,
}: AccordionProps) => (
  <div className={accordion.accordion}>
    <div className={accordion.item}>
      <input
        type='checkbox'
        className={accordion.toggler}
        disabled={Boolean(disabled)}
        checked={forceOpen ? true : undefined}
      />
      <span className={accordion.trigger}>
        {label}
        {trigger ? trigger : !disabled && <ArrowDown className={accordion.arrow} />}
      </span>
      <ul className={accordion.dropdown}>{children}</ul>
    </div>
  </div>
)

export default Accordion
