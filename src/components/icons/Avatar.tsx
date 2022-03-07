import * as React from 'react'
import { SVGProps } from 'react'

const SvgAvatar = (props: SVGProps<SVGSVGElement>) => (
  <svg fill='#fff' viewBox='0 0 128 128' width='1em' height='1em' {...props}>
    <path d='M103 102.139C93.094 111.92 79.35 118 64.164 118c-15.358 0-29.235-6.232-39.164-16.21V95.2C25 86.81 31.981 80 40.6 80h46.8c8.619 0 15.6 6.81 15.6 15.2v6.939ZM63.996 24C51.294 24 41 34.294 41 46.996 41 59.706 51.294 70 63.996 70 76.7 70 87 59.706 87 46.996 87 34.294 76.699 24 63.996 24' />
  </svg>
)

export default SvgAvatar
