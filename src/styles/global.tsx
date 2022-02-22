import { Global, css } from '@emotion/react'
import { AppTheme } from './theme/models'

const GlobalStyles = () => (
  <Global
    styles={(theme) => css`
      @import url('https://fonts.cdnfonts.com/css/true-lies');

      * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
      }

      a {
        text-decoration: none;
      }

      ul {
        list-style: none;
      }

      html,
      body,
      #__next {
        height: 100%;
        overflow-x: hidden;
      }

      body,
      #__next {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
          'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue';
        font-size: ${(theme as AppTheme).readonly.fontSize('body2')};
        background-color: ${(theme as AppTheme).mutatable.global.bg};
        color: ${(theme as AppTheme).mutatable.global.contrastText};
      }
    `}
  />
)

export default GlobalStyles
