import React, { FC, ReactNode, ElementType } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '../../hocs/with_styles'
import { Box, Button, Typography } from '../'
import { Cross } from '../../components/icons'
import { ContentProps } from '../../hocs/with_modal_config'
import { AppTheme } from 'styles/theme/models'

export type NotificationProps = {
    content?: ElementType | ReactNode
    title?: string
    subtitle?: string | ReactNode
    type?: 'info' | 'warning' | 'error' | 'success' | 'default'
} & ContentProps

const StyledNotification = styled.div<{isVisible?: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    bottom: 2rem;
    right: 3rem;
    min-height: 3.5rem;
    width: clamp(300px, 40%, 600px);
    border: 1px solid ${({ theme }) => (theme as AppTheme).mutatable.border};
    border-radius: 5px;
    border-left: none;
    padding: 0.3rem;
    padding-left: 0;

    transition-property: transform, opacity;
    transition-duration: 0.2s, 0.3s;
    transform: ${({ isVisible }) => isVisible ? 'translateY(0)' : 'translateY(50%)'};
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};
    z-index: ${({ theme, isVisible }) => isVisible ? (theme as AppTheme).readonly.zIndex.popup : -1};
    overflow: hidden;

    .color-line {
        display: table-cell;
        min-height: max(100%, 3.5rem);
        width: .5rem;
        position: absolute;
    }

    .content-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 1.5rem;
    }

    .notification-closer {
        position: absolute !important;
        top: .4rem;
        right: .4rem;
    }
`

const _Notification: FC<NotificationProps> = ({ 
    content, 
    title,     
    subtitle, 
    type = 'info', 
    isVisible, 
    onClose, 
    closable, 
    ...props 
}: NotificationProps) => (
    <StyledNotification isVisible={isVisible} {...props}>
        <Box className='color-line' palette={type}> </Box>
        <div className='content-container'>
            <Typography fullSize align='left' color='secondary'>{title}</Typography>
            {subtitle && 
                <Typography fontSize='body1' spacing={{mb: 0.5}}>
                    {subtitle}
                </Typography>
            }
            {content}
        </div>
        {closable && 
            <Button 
                className='notification-closer' 
                before={<Cross />} 
                palette='inherit' 
                onClick={() => onClose && onClose()} 
            />
        }
    </StyledNotification>
)

const Notification = withStyles<NotificationProps & WithStylesProps>(_Notification, null, true)

export default Notification