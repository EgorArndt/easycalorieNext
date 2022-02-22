import * as React from 'react'
import { SVGProps } from 'react'

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
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
    <path d='M15.231.586a.797.797 0 0 1 1.538 0l3.223 10.402c.108.35.418.586.768.586h10.43c.783 0 1.109 1.05.475 1.533l-8.438 6.43a.871.871 0 0 0-.293.947l3.223 10.403c.242.78-.61 1.43-1.244.947l-8.438-6.429a.778.778 0 0 0-.95 0l-8.438 6.43c-.633.482-1.486-.167-1.244-.948l3.223-10.403a.871.871 0 0 0-.293-.948L.335 13.107c-.634-.482-.308-1.533.475-1.533h10.43c.35 0 .66-.236.768-.586L15.231.586Z' />
  </svg>
)

export default SvgStar
