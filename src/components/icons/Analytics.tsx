import * as React from 'react'
import { SVGProps } from 'react'

const SvgAnalytics = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    stroke='currentColor'
    strokeWidth={1.5}
    strokeLinecap='round'
    strokeLinejoin='round'
    fill='none'
    shapeRendering='geometricPrecision'
    style={{
      color: 'var(--geist-background)',
    }}
    {...props}
  >
    <path d='m23 6-9.5 9.5-5-5L1 18' />
    <path d='M17 6h6v6' />
  </svg>
)

export default SvgAnalytics
