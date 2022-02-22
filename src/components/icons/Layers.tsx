import * as React from 'react'
import { SVGProps } from 'react'

const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
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
    <path d='M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
  </svg>
)

export default SvgLayers
