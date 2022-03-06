import { FC, ReactNode } from 'react'

import { Typography, TypographyProps } from '@ui'

type ErrorPopupProps = {
  text?: ReactNode
  variant?: 'ghost' | 'contained'
} & Omit<TypographyProps, 'children'>

const ErrorPopup: FC<ErrorPopupProps> = ({
  text,
  variant = 'ghost',
  ...props
}: ErrorPopupProps) => {
  const isContained = variant === 'contained'

  return (
    <Typography
      palette={isContained ? 'error' : 'default'}
      color={!isContained && 'error'}
      font='secondary'
      fontSize='body1'
      style={{
        borderRadius: 5,
        padding: isContained ? '0.5rem 1rem' : 'initial',
      }}
      {...props}
    >
      {text}
    </Typography>
  )
}

export default ErrorPopup
