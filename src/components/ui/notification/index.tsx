import { FC, ReactNode, RefObject } from 'react'

import { StyledNotification } from './styles'
import { withStyles, WithStylesProps } from '@hocs'
import { Box, Button, Typography } from '@ui'
import { Cross } from '@icons'

export type NotificationProps = {
  children?: ReactNode
  title?: string
  subtitle?: string | ReactNode
  type?: 'info' | 'warning' | 'error' | 'success' | 'default'
  onClose?: () => void
  closable?: boolean
  componentRef?: RefObject<HTMLDivElement>
}

export type EnhancedNotificationProps = NotificationProps & WithStylesProps

const _Notification: FC<NotificationProps> = ({
  children,
  title,
  subtitle,
  type = 'info',
  onClose,
  closable,
  componentRef,
  ...props
}: NotificationProps) => (
  <StyledNotification ref={componentRef} {...props}>
    <Box className='color-line' palette={type}>
      {' '}
    </Box>
    <div className='content-container'>
      <Typography fullSize align='left' color='secondary'>
        {title}
      </Typography>
      {subtitle && (
        <Typography fontSize='body1' spacing={{ mb: 0.5 }}>
          {subtitle}
        </Typography>
      )}
      {children}
    </div>
    {closable && (
      <Button
        className='notification-closer'
        before={<Cross />}
        palette='inherit'
        onClick={() => onClose && onClose()}
      />
    )}
  </StyledNotification>
)

const Notification = withStyles<EnhancedNotificationProps>(
  _Notification,
  null,
  true
)

export default Notification
