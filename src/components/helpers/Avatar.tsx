import Image from 'next/image'
import { ReactNode } from 'react'

import { Box, BoxProps, Icon } from '@ui'
import { Avatar as DefaultAvatar } from '@icons'

type AvatarProps = {
  nodeOnLeft?: ReactNode
  nodeOnRight?: ReactNode
  imgSrc?: string
} & BoxProps

const Avatar = ({ nodeOnLeft, nodeOnRight, imgSrc, ...props }: AvatarProps) => (
  <Box center gap='1rem' {...props}>
    {nodeOnLeft}
    <Icon
      i={imgSrc ? <Image layout='fill' src={imgSrc} /> : <DefaultAvatar />}
      rounded
      style={{ overflow: 'hidden' }}
      height={40}
      width={40}
    />
    {nodeOnRight}
  </Box>
)

export default Avatar
