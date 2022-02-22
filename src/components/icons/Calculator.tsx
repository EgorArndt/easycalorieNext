import * as React from 'react'
import { SVGProps } from 'react'

const SvgCalculator = (props: SVGProps<SVGSVGElement>) => (
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
    <path d='m4 17 6-6-6-6M12 19h8' />
  </svg>
)

export default SvgCalculator
