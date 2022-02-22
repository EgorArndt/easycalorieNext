import * as React from 'react'
import { SVGProps } from 'react'

const SvgWidget = (props: SVGProps<SVGSVGElement>) => (
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
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <path d='M3 9h18M9 21V9' />
  </svg>
)

export default SvgWidget
