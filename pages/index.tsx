import type { NextPage } from 'next'

import { HomeHeader, Hero, HomeFooter } from 'app/views/home'

const Home: NextPage = () => {

  return (
    <>
      <HomeHeader />
      <Hero />
      <HomeFooter />
    </>
  )
}

export default Home
