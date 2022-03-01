import { FC, ReactNode, RefObject } from 'react'

import { ArrowLeft as ArrowDown } from '@icons'
import accordion from './styles.module.css'

type AccordionProps = {
  label?: string | ReactNode
  children?: ReactNode
  trigger?: string | ReactNode
  disabled?: boolean | null
  forceOpen?: true | null
  componentRef?: RefObject<HTMLDivElement>
}

const Accordion: FC<AccordionProps> = ({
  label,
  children,
  trigger,
  disabled,
  forceOpen,
  componentRef,
}: AccordionProps) => (
  <div className={accordion.accordion} ref={componentRef}>
    <div className={accordion.item}>
      <input
        type='checkbox'
        className={accordion.toggler}
        disabled={Boolean(disabled)}
        checked={forceOpen ? true : undefined}
      />
      <span className={accordion.trigger}>
        {label}
        {trigger
          ? trigger
          : !disabled && <ArrowDown className={accordion.arrow} />}
      </span>
      <ul className={accordion.dropdown}>{children}</ul>
    </div>
  </div>
)

export default Accordion
