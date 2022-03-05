import Image from 'next/image'

import type { Page } from 'next/app'
import { AppLayout } from '@layouts/AppLayout'
import { AppContainer, Main } from '@layouts/base'
import HomeFooter from '@layouts/footers/HomeFooter'
import { StickyNav } from '@layouts/helpers'
import { LeftBlock, RightBlock } from '@layouts/headers/dashboard'
import { navItems } from '@layouts/headers/dashboard/constants'
import { Input, GridRow, Button, Typography, Box } from '@ui'
import { Search, Plus, ThreeDots } from '@icons'
import { DndItem, DndZone } from 'components/dnd'
import { Card } from 'components/helpers/card'
import logo from '@public/logo.png'
import SearchRow from '@views/dashboard/SearchRow'
import { items } from '@views/dashboard/constants'
import Placeholder from 'components/helpers/Placeholder'
import createMeal from 'components/modal/create_meal/create_meal'

const Dashboard: Page = () => {
  return (
    <Main palette='secondary' height='100%' spacing={{ py: 1 }} borderTop>
      <AppContainer width='100%' column childrenSpacing={{ my: 1 }}>
        <SearchRow />
        <Placeholder
          title="You haven't created any items yet."
          text='Go ahead and create one!'
          linkText='Get started'
          cb={createMeal}
          palette='primary'
        />
        {/* <DndZone gap='1rem' itemSize={{ min: 300 }}>
          {items.map(({ title, subtitle, text }) => (
            <DndItem key={title}>
              {({ handle }) => (
                <Card
                  {...handle}
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
                          {title}
                        </Typography>
                        <Typography>{subtitle}</Typography>
                      </Box>
                      <Button
                        before={<ThreeDots />}
                        palette='inherit'
                        variant='ghost'
                        style={{ marginLeft: 'auto' }}
                      />
                    </Box>
                  }
                  body={<Typography weight={500}>{text}</Typography>}
                  footer={<Typography fontSize='caption'>16h ago</Typography>}
                  fontSize='body1'
                  gap='1rem'
                />
              )}
            </DndItem>
          ))}
        </DndZone> */}
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
