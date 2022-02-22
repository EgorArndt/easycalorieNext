import * as React from 'react'
import { SVGProps } from 'react'

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill='currentColor'
    height='1em'
    width='1em'
    viewBox='0 0 32 32'
    style={{
      verticalAlign: 'middle',
    }}
    {...props}
  >
    <path d='M17.6 0h-3.2v14.4H0v3.2h14.4V32h3.2V17.6H32v-3.2H17.6V0Z' />
  </svg>
)

export default SvgPlus
