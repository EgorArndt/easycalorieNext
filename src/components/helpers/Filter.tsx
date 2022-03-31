import { capitalize } from 'lodash-es'

import { Dropdown, DropdownTrigger, DropdownItem, Checkbox, Label } from '@ui'
import { ArrowLeft as ArrowDown } from '@icons'

type FilterProps = {
  label: string
  options: string[]
  cb: (value: string) => void
  curVal: string
  disabled?: boolean
}

const Filter = ({ label, options, cb, curVal, disabled }: FilterProps) => (
  <Dropdown
    trigger={({ open }) => (
      <DropdownTrigger
        iSize={6}
        after={
          <ArrowDown
            style={{
              transform: `rotate(${open ? 90 : -90}deg)`,
              transition: 'ease 0.3s',
            }}
          />
        }
        size='s'
        border
        palette='inherit'
        variant='ghost'
        spacing={{ px: 2 }}
        gap='1rem'
      >
        {label} {curVal}
      </DropdownTrigger>
    )}
  >
    {options.map((opt) => (
      <DropdownItem key={opt} spacing={{ p: 0 }}>
        <Label id={opt} spacing={{ py: 0.5, px: 1 }}>
          <Checkbox
            disabled={disabled}
            value={opt}
            checked={opt === curVal}
            onChange={(e) => cb((e.target as HTMLInputElement).value)}
          />
          {capitalize(opt)}
        </Label>
      </DropdownItem>
    ))}
  </Dropdown>
)

export default Filter
