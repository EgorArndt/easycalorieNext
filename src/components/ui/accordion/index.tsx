import { FC, ReactNode } from 'react'

import { Box } from '@ui'
import { ArrowLeft as ArrowDown } from '@icons'
import accordion from './styles.module.css'

type AccordionProps = {
  label?: string | ReactNode
  children?: ReactNode
  trigger?: string | ReactNode
  disabled?: boolean | null
  forceOpen?: true | null
  [key: string]: unknown
}

const Accordion: FC<AccordionProps> = ({
  label,
  children,
  trigger,
  disabled,
  forceOpen,
  ...props
}: AccordionProps) => (
  <Box className={accordion.accordion} center {...props}>
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
  </Box>
)

export default Accordion
