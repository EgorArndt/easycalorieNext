import type { Page } from 'next/app'
import { AppLayout } from '@layouts/AppLayout'
import { AppContainer, Main } from '@layouts/base'
import { Input, GridRow, Button } from '@ui'

import HomeFooter from '@layouts/footers/HomeFooter'
import { StickyNav, StickyNavProps } from '@layouts/helpers'
import { LeftBlock, RightBlock } from '@layouts/headers/dashboard'
import { navItems as defaultNav } from '@layouts/headers/dashboard/constants'

const Test: Page = () => {
  return (
    <Main palette='secondary' height='100%' spacing={{ py: 1 }} borderTop>
      <AppContainer width='100%' column>
        <GridRow
          width='100%'
          center
          rowItemSizes={[16, 4, 4]}
          gap='1rem'
          fontSize='body1'
        >
          <Input size='s' placeholder='Search...' />
          <Button
            width='100%'
            palette='inherit'
            variant='ghost'
            size='s'
            border
          >
            Create a meal
          </Button>
          <Button width='100%' palette='primary' size='s'>
            Create a plan
          </Button>
        </GridRow>
      </AppContainer>
    </Main>
  )
}

// Dashboard.getLayout = (page) =>  <AppLayout
// left={<LeftBlock />}
// centerNav
// right={<RightBlock />}
// footer={<HomeFooter palette='primary' />}
// >
// <StickyNav navItems={defaultNav} />
// {page}
// </AppLayout>

export default Test
