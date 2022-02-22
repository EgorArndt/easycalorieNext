import { FC } from 'react'
import { ThemeProvider } from '@emotion/react'

import { System } from './themes/system'

const Theme: FC = ({ children }) => {
  const themes = {
    light: System,
    dark: System,
    system: System,
  }

  return <ThemeProvider theme={themes.system}> {children} </ThemeProvider>
}

export default Theme
