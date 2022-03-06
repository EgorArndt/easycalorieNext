import { AppContext, AppInitialProps, MyAppProps, GetLayout } from 'next/app'
import type { NextComponentType } from 'next'
import { ToastContainer } from 'react-toastify'

import AuthProvider from '@lib/AuthProvider'
import { ModalCollection } from 'components/modal/ModalCollection'
import GlobalStyles from 'styles/global'
import Theme from 'styles/theme'
import 'components/ui/menu/menu.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import 'react-toastify/dist/ReactToastify.css'

const MyApp: NextComponentType<AppContext, AppInitialProps, MyAppProps> = ({
  Component,
  pageProps,
}: MyAppProps) => {
  const getLayout: GetLayout = Component.getLayout || ((page) => page)

  return (
    <Theme>
      <GlobalStyles />
      <AuthProvider>
        <ModalCollection />
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
        {getLayout(<Component {...pageProps} />)}
      </AuthProvider>
    </Theme>
  )
}

export default MyApp
