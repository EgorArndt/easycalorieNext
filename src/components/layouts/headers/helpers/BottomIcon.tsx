import { FC } from 'react'

import { Icon, IconProps } from '@ui'

type BottomIconProps = {
  variant?: 'online'
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
      style={styles}
      rounded={isOnline}
      height={13}
      width={13}
      palette={isOnline && 'success'}
      border={isOnline}
      {...props}
    >
      {!isOnline && children}
    </Icon>
  )
}

export default BottomIcon
