import { FC } from 'react'

import { HomeLayout, HomeLayoutProps } from './HomeLayout'
import HomeFooter from '@layouts/footers/HomeFooter'
import { StickyNav, StickyNavProps } from '@layouts/helpers'
import { LeftBlock, RightBlock } from '@layouts/headers/dashboard'
import { navItems as defaultNav } from '@layouts/headers/dashboard/constants'

type DashboardLayoutProps = StickyNavProps & HomeLayoutProps

export const DashboardLayout: FC<DashboardLayoutProps> = ({
  children,
  navItems = defaultNav,
  ...props
}: DashboardLayoutProps) => (
  <HomeLayout
    left={<LeftBlock />}
    centerNav
    right={<RightBlock />}
    footer={<HomeFooter palette='primary' />}
    {...props}
  >
    <StickyNav navItems={navItems} />
    {children}
  </HomeLayout>
)
