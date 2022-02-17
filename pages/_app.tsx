import type { AppProps } from 'next/app'

import GlobalStyles from '../styles/global'
import Theme from '../styles/theme'
import 'app/ui/menu/menu.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Theme>
      <GlobalStyles />
      <Component {...pageProps} />
    </Theme>
  )
}

export default App
