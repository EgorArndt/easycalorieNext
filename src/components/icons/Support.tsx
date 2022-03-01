import * as React from 'react'
import { SVGProps } from 'react'

const SvgSupport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 51 51'
    width='1em'
    height='1em'
    {...props}
  >
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M38.25 6.11a20.262 20.262 0 0 0-25.5 0m5.313 7.678a11.824 11.824 0 0 1 14.875 0'
    />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M7.172 35.063a5.578 5.578 0 1 0 0-11.156 5.578 5.578 0 0 0 0 11.156z'
      clipRule='evenodd'
    />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M15.968 42.467a9.558 9.558 0 0 0-14.374-4.003'
    />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M43.829 35.063a5.578 5.578 0 1 0 0-11.156 5.578 5.578 0 0 0 0 11.156z'
      clipRule='evenodd'
    />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M35.033 42.467a9.558 9.558 0 0 1 14.373-4.003'
    />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M25.5 35.063a7.172 7.172 0 1 0 0-14.344 7.172 7.172 0 0 0 0 14.343z'
      clipRule='evenodd'
    />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M38.25 49.406a12.865 12.865 0 0 0-25.5 0'
    />
  </svg>
)

export default SvgSupport
