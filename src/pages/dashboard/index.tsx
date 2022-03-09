import Image from 'next/image'
import useSWR from 'swr'
import { format, parseISO } from 'date-fns'

import type { Page } from 'next/app'
import type { Meal } from '@lib/models'
import { AppLayout } from '@layouts/AppLayout'
import { AppContainer, Main } from '@layouts/base'
import HomeFooter from '@layouts/footers/HomeFooter'
import User from '@views/dashboard/User'
import SearchRow from '@views/dashboard/SearchRow'
import {
  Placeholder,
  StickyNav,
  UserMenu,
  Card,
  FeedbackButton,
} from 'components/helpers'
import createMeal from 'components/modal/create_meal'
import Skeleton from 'components/skeleton'
import { GridGroup, Box, Typography, Button } from '@ui'
import { ThreeDots } from '@icons'
import { fetcher } from '@utils'
import { useBreakpoints } from '@hooks'
import logo from '@public/logo.png'
import { meals } from 'constants/api'

const Dashboard: Page = () => {
  const { data } = useSWR(meals, fetcher) as { data: Array<Meal> }
  const { isXs, isS } = useBreakpoints()
  const isMobile = isXs || isS
  return (
    <Main palette='secondary' spacing={{ py: 1 }} borderTop>
      <AppContainer width='100%' column childrenSpacing={{ my: 1 }}>
        <SearchRow disabled={!Boolean(data?.length)} />

        {!data && (
          <GridGroup itemSize={{ min: 300, max: !isMobile && 350 }} gap='1rem'>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} height={180} inline />
            ))}
          </GridGroup>
        )}

        {data && Boolean(data.length) && (
          <GridGroup itemSize={{ min: 300, max: !isMobile && 350 }} gap='1rem'>
            {data.map((d) => (
              <Card
                key={d.name}
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
                        {d.name}
                      </Typography>
                      {d.labels && <Typography>{d.labels}</Typography>}
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
                  d.comment && <Typography weight={500}>{d.comment}</Typography>
                }
                footer={
                  <Typography fontSize='caption'>
                    {format(parseISO(d.createdAt), 'PPpp')}
                  </Typography>
                }
                fontSize='body1'
                gap='1rem'
              />
            ))}
          </GridGroup>
        )}

        {data && !data.length && (
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
