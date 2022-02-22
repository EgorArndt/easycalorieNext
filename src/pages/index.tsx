import type { NextPage } from 'next'

import { HomeHeader, Hero, HomeFooter, HomeSection } from 'components/views/home'
import { SectionProps } from 'components/views/home/section'
import { Find, Integrate, Enjoy } from 'components/views/home/section/children'
import { Link, Typography } from '@ui'

const Home: NextPage = () => {
  const texts = {
    section1: [
      <Typography>
        Lorem ipsum dolor sit{' '}
        <Link palette='info' variant='contained-reversed' to='/'>
          Imma link yo
        </Link>{' '}
        consectetur,adipisicing <Link to='/'>Imma link too babe</Link>. Laborum
        voluptatum beatae hic at, nobis ipsam ex aliquam? Nam assumenda sapiente
        dolores doloremque tenetur impedit animi architecto{' '}
        <Link to='/' palette='info' variant='contained-reversed'>
          Lets get together!
        </Link>
        , minima, possimus pariatur!
      </Typography>,
      <Typography>
        Lorem, ipsum dolor sit{' '}
        <Link palette='info' variant='contained-reversed' to='/'>
          Imma link yo
        </Link>{' '}
        consectetur adipisicing{' '}
        <Link palette='info' variant='contained-reversed' to='/'>
          Imma link too babe
        </Link>
        . Suscipit{' '}
        <Link to='/' palette='info' variant='contained-reversed'>
          Lets get together!
        </Link>{' '}
        pariatur rerum tempora dolor. Ab magni quas{' '}
        <Link palette='info' variant='contained-reversed' to='/'>
          Imma link yo
        </Link>
        , culpa dolore totam eos labore veniam. Inventore illum cumque voluptas
        minus voluptatem.
      </Typography>,
    ],
    section2: [
      <Typography>
        Lorem ipsum dolor sit{' '}
        <Link palette='error' variant='contained-reversed' to='/'>
          Imma link yo
        </Link>
        , consectetur adipisicing{' '}
        <Link palette='error' variant='contained-reversed' to='/'>
          Imma link too babe
        </Link>
        . Illo quibusdam eum eaque perspiciatis accusamus sunt, itaque deserunt
        enim voluptates culpa officiis at doloremque qui nesciunt delectus nulla
        natus necessitatibus quod?
      </Typography>,
    ],
    section3: [
      <Typography>
        Lorem ipsum dolor sit{' '}
        <Link palette='warning' variant='contained-reversed' to='/'>
          Imma link yo
        </Link>{' '}
        consectetur adipisicing{' '}
        <Link palette='warning' variant='contained-reversed' to='/'>
          Imma link too babe
        </Link>
        . Alias quibusdam quaerat quos error atque modi ipsam optio odit vero
        ratione. Nihil veritatis iusto ex sapiente sequi facilis repellat
        excepturi ratione!
      </Typography>,
      <Typography>
        Lorem ipsum dolor sit{' '}
        <Link palette='warning' variant='contained-reversed' to='/'>
          Imma link yo
        </Link>{' '}
        consectetur adipisicing{' '}
        <Link palette='warning' variant='contained-reversed' to='/'>
          Imma link too babe
        </Link>
        . Quisquam earum id, vero ad exercitationem dolorem natus voluptas
        deserunt iusto numquam. Et consectetur fuga expedita adipisci! Mollitia
        eius soluta quibusdam autem?
      </Typography>,
    ],
  }

  const sections: Array<SectionProps> = [
    {
      title: 'Start with the database',
      smallText: 'Explore the tools we give you',
      color: 'cyan',
      circleContent: 1,
      lineTitle: 'Find',
      texts: texts.section1,
    },
    {
      title: 'Create a nutrition plan',
      color: 'purple',
      circleContent: 2,
      lineTitle: 'Integrate',
      texts: texts.section2,
    },
    {
      title: 'Have total control over your diet',
      color: 'orange',
      circleContent: 3,
      lineTitle: 'Enjoy',
      texts: texts.section3,
    },
  ]

  return (
    <>
      <HomeHeader />
      <Hero />
      {sections.map((s) => {
        const isFind = s.lineTitle === 'Find'
        const isIntegrate = s.lineTitle === 'Integrate'
        const isEnjoy = s.lineTitle === 'Enjoy'

        return (
          <HomeSection
            key={s.title}
            title={s.title}
            smallText={s.smallText}
            color={s.color}
            circleContent={s.circleContent}
            lineTitle={s.lineTitle}
            texts={s.texts}
            spacing={isIntegrate && { mt: 4 }}
          >
            {isFind && <Find />}
            {isIntegrate && <Integrate />}
            {isEnjoy && <Enjoy />}
          </HomeSection>
        )
      })}
      <HomeFooter />
    </>
  )
}

export default Home
