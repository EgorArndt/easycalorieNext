import type { Page } from 'next/app'
import { DashboardLayout } from '@layouts/complete/DashboardLayout'
import { AppContainer, Main } from '@layouts/base'
import { Input, GridRow ,Button} from '@ui'

const Dashboard: Page = () => {
  return (
    <Main palette='secondary' height='100%' spacing={{ py: 1 }} borderTop>
      <AppContainer width='100%' column>
        <GridRow width='100%' center rowItemSizes={[16, 4, 4]} gap='1rem' fontSize='body1'>
          <Input size='s' placeholder='Search...' />
          <Button width='100%' palette='inherit' variant='ghost' size='s' border>Create a meal</Button>
          <Button width='100%' palette='primary' size='s'>Create a plan</Button>
        </GridRow>
      </AppContainer>
    </Main>
  )
}

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Dashboard
