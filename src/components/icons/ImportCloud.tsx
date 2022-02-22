import * as React from 'react'
import { SVGProps } from 'react'

const SvgImportCloud = (props: SVGProps<SVGSVGElement>) => (
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
    <path d='M24.863 7.623a4.668 4.668 0 0 1 4.19 4.272A5.333 5.333 0 0 1 26.666 22h-7.334v-5.593l3.205 3.434 2.924-2.73-8.129-8.709-8.128 8.71 2.924 2.729 3.204-3.434V22H4v-.047a4.668 4.668 0 0 1-1.013-8.975 4.667 4.667 0 0 1 5.957-5.181 8.404 8.404 0 0 1 15.92-.174Z' />
    <path d='M16 22h2.667v8H16v-8Z' />
  </svg>
)

export default SvgImportCloud
