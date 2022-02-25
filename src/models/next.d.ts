import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactNode } from 'react'

declare module 'next/app' {
  type GetLayout = (page: ReactNode) => ReactNode
  type Page<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: GetLayout
  }
  type MyAppProps<P = {}> = AppProps<P> & {
    Component: Page<P>
  }
}
