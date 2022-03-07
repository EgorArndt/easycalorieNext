import Image from 'next/image'
import useSWR from 'swr'

import type { Page } from 'next/app'
import { AppLayout } from '@layouts/AppLayout'
import { AppContainer, Main } from '@layouts/base'
import HomeFooter from '@layouts/footers/HomeFooter'
import User from '@views/dashboard/User'
import SearchRow from '@views/dashboard/SearchRow'
import Placeholder from 'components/helpers/Placeholder'
import StickyNav from 'components/helpers/StickyNav'
import FeedbackButton from 'components/helpers/FeedbackButton'
import createMeal from 'components/modal/create_meal'
import UserMenu from 'components/helpers/UserMenu'
import Skeleton from 'components/skeleton'
import { Card } from 'components/helpers/card'
import { GridGroup, Box, Typography, Button } from '@ui'
import { ThreeDots } from '@icons'
import { fetcher } from '@utils'
import { useBreakpoints } from '@hooks'
import logo from '@public/logo.png'

// if no user redirect to home page

const Dashboard: Page = () => {
  const { data } = useSWR('/api/meals', fetcher)
  const { isXs, isS } = useBreakpoints()
  const isMobile = isXs || isS
  return (
    <Main palette='secondary' height='100%' spacing={{ py: 1 }} borderTop>
      <AppContainer width='100%' column childrenSpacing={{ my: 1 }}>
        <SearchRow disabled={Boolean(!data)} />
        <GridGroup itemSize={{ min: 300, max: !isMobile && 350 }} gap='1rem'>
          {!data
            ? [1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} height={100} inline />
              ))
            : data.length ? data.map((m) => (
                <Card
                  key={m.mealName}
                  header={
                    <Box
                      gap='1rem'
                      height={50}
                      width='100%'
                      align={['left', 'center']}
                    >
                      <Box height={30} width={30}>
                        <Image src={logo} layout='intrinsic' />
                      </Box>
                      <Box column>
                        <Typography color='primary' fontSize='body2' bold>
                          {m.mealName}
                        </Typography>
                        {m.labels && <Typography>{m.labels}</Typography>}
                      </Box>
                      <Button
                        before={<ThreeDots />}
                        palette='inherit'
                        variant='ghost'
                        style={{ marginLeft: 'auto' }}
                      />
                    </Box>
                  }
                  body={
                    m.userComment && (
                      <Typography weight={500}>{m.userComment}</Typography>
                    )
                  }
                  footer={
                    <Typography fontSize='caption'>{m.createdAt}</Typography>
                  }
                  fontSize='body1'
                  gap='1rem'
                />
              ))
              :  (
                <Placeholder
                  title="You haven't created any items yet."
                  text='Go ahead and create one!'
                  linkText='Get started'
                  cb={createMeal}
                  palette='primary'
                /> 
              )
            }
        </GridGroup>
      </AppContainer>
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
        <FeedbackButton /> <UserMenu />
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
