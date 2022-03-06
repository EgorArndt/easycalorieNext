import type { Page } from 'next/app'
import { AppLayout } from '@layouts/AppLayout'
import { AppContainer, Main } from '@layouts/base'
import HomeFooter from '@layouts/footers/HomeFooter'
import { StickyNav } from '@layouts/helpers'
import { LeftBlock, RightBlock } from '@layouts/headers/dashboard'
import { navItems } from '@layouts/headers/dashboard/constants'
import SearchRow from '@views/dashboard/SearchRow'
import { items } from '@views/dashboard/constants'
import Placeholder from 'components/helpers/Placeholder'
import createMeal from 'components/modal/create_meal'
import { ItemContainer } from '@views/dashboard/ItemContainer'

const Dashboard: Page = () => {
  return (
    <Main palette='secondary' height='100%' spacing={{ py: 1 }} borderTop>
      <AppContainer width='100%' column childrenSpacing={{ my: 1 }}>
        <SearchRow />
        {!items ? (
          <ItemContainer items={items} />
        ) : (
          <Placeholder
            title="You haven't created any items yet."
            text='Go ahead and create one!'
            linkText='Get started'
            cb={createMeal}
            palette='primary'
          />
        )}
      </AppContainer>
    </Main>
  )
}

Dashboard.getLayout = (page) => (
  <AppLayout
    left={<LeftBlock />}
    centerNav
    right={<RightBlock />}
    footer={<HomeFooter palette='primary' />}
  >
    <StickyNav navItems={navItems} />
    {page}
  </AppLayout>
)

export default Dashboard
