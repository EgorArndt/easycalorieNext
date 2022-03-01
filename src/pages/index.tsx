import type { Page } from 'next/app'

import { HomeHero, HomeSection } from '@views/home'
import HomeLayout from '@layouts/crafted/HomeLayout'
import { AppContainer, Main } from '@layouts/base'
import { SectionProps } from '@views/home/section'
import { Find, Add, Enjoy } from '@views/home/section/children'
import { FirstText, SecondText, ThirdText } from '@views/home/section/texts'

const Home: Page = () => {
  const sections: Array<SectionProps> = [
    {
      title: 'Start with the database',
      smallText: 'Explore the tools we give you',
      color: 'cyan',
      circleContent: 1,
      lineTitle: 'Find',
      texts: <FirstText />,
    },
    {
      title: 'Create a nutrition plan',
      color: 'purple',
      circleContent: 2,
      lineTitle: 'Add',
      texts: <SecondText />,
    },
    {
      title: 'Have total control over your diet',
      color: 'orange',
      circleContent: 3,
      lineTitle: 'Enjoy',
      texts: <ThirdText />,
    },
  ]

  return (
    <Main column center>
      <HomeHero />
      <AppContainer column>
        {sections.map((s) => {
          const isFind = s.lineTitle === 'Find'
          const isAdd = s.lineTitle === 'Add'
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
              spacing={isAdd && { mt: 4 }}
            >
              {isFind && <Find />}
              {isAdd && <Add />}
              {isEnjoy && <Enjoy />}
            </HomeSection>
          )
        })}
      </AppContainer>
    </Main>
  )
}

Home.getLayout = (page) => <HomeLayout borderBottom={false}>{page}</HomeLayout>

export default Home
