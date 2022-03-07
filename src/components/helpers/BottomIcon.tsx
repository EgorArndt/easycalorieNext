import { FC, ReactNode } from 'react'

import { Icon, IconProps } from '@ui'

type BottomIconProps = {
  variant?: 'online'
  children?: ReactNode
} & IconProps

const BottomIcon: FC<BottomIconProps> = ({
  variant,
  children,
  ...props
}: BottomIconProps) => {
  const styles = {
    position: 'absolute',
    left: 0,
    bottom: 0,
  }

  const isOnline = variant === 'online'

  return (
    <Icon
      i={!isOnline && children}
      style={styles}
      rounded={isOnline}
      height={13}
      width={13}
      palette={isOnline && 'success'}
      border={isOnline}
      {...props}
    />
  )
}

export default BottomIcon
