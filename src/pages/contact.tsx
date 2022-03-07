import type { Page } from 'next/app'
import { AppLayout } from '@layouts/AppLayout'
import ContactHero from '@views/contact/hero'
import { Motivators } from '@views/contact/sections'
import Banner from 'components/helpers/banner'
import { Link } from '@ui'

const Contact: Page = () => {
  return (
    <>
      <ContactHero />
      <Motivators />
      <Banner
        title='Find. Add. Enjoy.'
        subtext='The platform for the best life experience.'
      >
        <Link to='/' size='l' unresponsiveSize palette='primary'>
          Start Creating
        </Link>
      </Banner>
    </>
  )
}

Contact.getLayout = (page) => (
  <AppLayout rightLinks={['contact', 'login']} borderBottom>
    {page}
  </AppLayout>
)

export default Contact
