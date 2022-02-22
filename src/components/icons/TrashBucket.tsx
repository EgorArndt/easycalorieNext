import * as React from 'react'
import { SVGProps } from 'react'

const SvgTrashBucket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    className='trashBucket_svg__sc-bdnylx trashBucket_svg__eoHNwX'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 0C5.6 0 4.4 2.333 4.4 3.692H2.375c-.207 0-.375.184-.375.41v1.642c0 .226.168.41.375.41h11.25c.207 0 .375-.184.375-.41V4.103c0-.227-.168-.41-.375-.41H11.6C11.6 2.332 10.4 0 8 0Zm2.4 3.692H5.6c0-.906.6-2.461 2.4-2.461 1.8 0 2.4 1.555 2.4 2.461Z'
      fill='currentColor'
    />
    <path
      d='M3.09 7.385c-.22 0-.393.207-.373.447l.752 7.795c.018.211.18.373.373.373h8.316c.194 0 .355-.162.373-.373l.612-7.795c.02-.24-.153-.447-.373-.447H3.09Z'
      fill='currentColor'
    />
  </svg>
)

export default SvgTrashBucket
