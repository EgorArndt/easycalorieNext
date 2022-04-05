import type { Page } from 'next/app'
import { AppLayout } from '@layouts/AppLayout'
import { Main } from '@layouts/base'
import HomeFooter from '@layouts/footers/HomeFooter'
import {
  Placeholder,
  StickyNav,
  UserMenu,
  FeedbackButton,
  User,
} from 'components/helpers'
import DashboardSection, {
  DashboardSectionProps,
} from '@views/dashboard/Section'
import { Box, Button } from '@ui'
import { Plus } from '@icons'
import createMeal from 'components/modal/create_meal'
import { meals } from 'constants/api'

const Dashboard: Page = () => {
  const sections: Array<DashboardSectionProps> = [
    {
      url: meals,
      palette: 'secondary',
      Fallback: <Placeholder palette='primary' />,
    },
    {
      url: meals,
      palette: 'primary',
      title: 'Discover',
      text: `Check out the meals that were created and shared by other users of
        Easycalorie. You can do the same by clicking Share on a
        corresponding meal or plan you've created to make it available for
        everyone.`,
      Fallback: <Placeholder palette='secondary' />,
      filterIds: ['date', 'type'],
    },
  ]

  return (
    <Main column>
      {sections.map(({ ...props }, i) => (
        <DashboardSection key={i} {...props}>
          {i === 0 && (
            <Box gap='1rem' center width='100%'>
              <Button
                palette='inherit'
                variant='ghost'
                before={<Plus />}
                iSize={10}
                size='s'
                border
                width='100%'
                onClick={createMeal}
                noWrap
              >
                Create a meal
              </Button>
              <Button palette='primary' size='s' width='100%' noWrap>
                Compose a plan
              </Button>
            </Box>
          )}
        </DashboardSection>
      ))}
    </Main>
  )
}

Dashboard.getLayout = (page) => (
  <AppLayout
    left={<User />}
    centerNav
    rightLinks={['contact']}
    rightExtra={
      <>
        <FeedbackButton />
        <UserMenu />
      </>
    }
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
