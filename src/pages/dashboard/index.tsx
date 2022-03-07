import type { Page } from 'next/app'
import { AppLayout } from '@layouts/AppLayout'
import { AppContainer, Main } from '@layouts/base'
import HomeFooter from '@layouts/footers/HomeFooter'
import { LeftBlock } from '@layouts/headers/dashboard'
import SearchRow from '@views/dashboard/SearchRow'
import { items } from '@views/dashboard/constants'
import Placeholder from 'components/helpers/Placeholder'
import StickyNav from 'components/helpers/StickyNav'
import FeedbackButton from 'components/helpers/FeedbackButton'
import createMeal from 'components/modal/create_meal'
import { ItemContainer } from '@views/dashboard/ItemContainer'
import UserMenu from 'components/helpers/UserMenu'

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
    rightLinks={['contact']}
    rightExtra={<><FeedbackButton />, <UserMenu /></>}
    footer={<HomeFooter palette='primary' />}
  >
    <StickyNav
      ids={[
        'overview',
        'database',
        'my_meals',
        'my_plans',
        'recently_deleted',
        'recently_modified',
        'settings',
      ]}
    />
    {page}
  </AppLayout>
)

export default Dashboard
