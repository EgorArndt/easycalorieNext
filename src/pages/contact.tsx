import type { Page } from 'next/app'
import HomeLayout from '@layouts/crafted/HomeLayout'
import ContactHero from '@views/contact/hero'
import { Motivators } from '@views/contact/sections'

const Contact: Page = () => {
  return (
    <>
      <ContactHero />
      <Motivators />
    </>
  )
}

Contact.getLayout = (page) => <HomeLayout>{page}</HomeLayout>

export default Contact
