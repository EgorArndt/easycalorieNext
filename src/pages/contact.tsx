import type { Page } from 'next/app'
import { HomeLayout } from '@layouts/complete/HomeLayout'
import ContactHero from '@views/contact/hero'
import { Motivators } from '@views/contact/sections'
import Banner from '@views/contact/helpers/banner'
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

Contact.getLayout = (page) => <HomeLayout borderBottom>{page}</HomeLayout>

export default Contact
