import { AppContext, AppInitialProps, MyAppProps, GetLayout } from 'next/app'
import type { NextComponentType } from 'next'

import GlobalStyles from 'styles/global'
import Theme from 'styles/theme'
import { ModalCollection } from 'components/modal/ModalCollection'
import 'components/ui/menu/menu.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

const App: NextComponentType<AppContext, AppInitialProps, MyAppProps> = ({
  Component,
  pageProps,
}: MyAppProps) => {
  const getLayout: GetLayout = Component.getLayout || ((page) => page)

  return (
    <Theme>
      <GlobalStyles />
      <ModalCollection />
      {getLayout(<Component {...pageProps} />)}
    </Theme>
  )
}

export default App
