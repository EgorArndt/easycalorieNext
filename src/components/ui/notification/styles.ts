import styled from '@emotion/styled'

import { AppTheme } from '@theme/models'

export const StyledNotification = styled.div<{ isVisible?: boolean }>`
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
  transform: ${({ isVisible }) =>
    isVisible ? 'translateY(0)' : 'translateY(50%)'};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  z-index: ${({ theme, isVisible }) =>
    isVisible ? (theme as AppTheme).readonly.zIndex.popup : -1};
  overflow: hidden;

  .color-line {
    display: table-cell;
    min-height: max(100%, 3.5rem);
    width: 0.5rem;
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
    top: 0.4rem;
    right: 0.4rem;
  }
`
