import { Header } from 'components/layouts/headers/primary'
import { Link, Button, Menu, MenuButton, Typography, GridGroup } from '@ui'
import Logo from 'components/layouts/logo'
import {
  ArrowLeft as ArrowDown,
  Widget,
  Layers,
  Circle,
  Analytics,
  Airplane,
  Calculator,
} from '@icons'
import { usePalette } from '@hooks'

const HomeHeader = () => {
  const { bg, contrastText } = usePalette('primary', 'button')

  return (
    <Header
      left={<Logo color='secondary' />}
      right={
        <>
          <Button palette='inherit' variant='bgless'>
            Support
          </Button>
          <Button palette='success' spacing={{ px: 1, py: 0.5 }}>
            Sign in
          </Button>
        </>
      }
      palette='primary'
    >
      <Menu
        transition
        offsetY={50}
        menuButton={({ open }) => {
          const rotation = open ? 'rotate(90deg)' : 'rotate(-90deg)'
          return (
            <MenuButton
              palette='inherit'
              variant='bgless'
              iSize={6}
              after={
                <ArrowDown
                  style={{ transform: rotation, transition: 'ease 0.3s' }}
                />
              }
            >
              Features
            </MenuButton>
          )
        }}
      >
        <GridGroup
          width='100vw'
          borderTop
          borderBottom
          spacing={{ py: 2 }}
          palette='primary'
          gap='3rem'
          itemSize={{ min: 300, max: 400 }}
          center
        >
          {[
            { title: 'Macronutrient calculator', i: <Calculator /> },
            { title: 'Food database', i: <Layers /> },
            { title: 'Scientific approvement', i: <Circle /> },
            { title: 'User friendly interface', i: <Widget /> },
            { title: 'Nutrition analytics', i: <Analytics /> },
            { title: 'Totally free to use', i: <Airplane /> },
          ].map(({ title, i }) => (
            <Link
              key={title}
              to={title}
              fontSize='body1'
              palette='inherit'
              spacing={{ py: 2, px: 3 }}
              gap='1rem'
              align='left'
              before={i}
              iSize={25}
              iClass='feature-icon'
            >
              <span>
                <Typography color='primary' bold>
                  {title}
                </Typography>
                <br />
                Lorem ipsum dolor sit amet.
              </span>
              <style jsx global>{`
                .feature-icon {
                  background-color: ${bg};
                  color: ${contrastText} !important;
                  width: 48px !important;
                  height: 48px !important;
                  border-radius: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-shrink: 0;
                }
              `}</style>
            </Link>
          ))}
        </GridGroup>
      </Menu>
      {[{ txt: 'Dashboard' }, { txt: 'Blog' }, { txt: 'News' }].map(
        ({ txt }) => (
          <Link
            key={txt}
            to={txt}
            fontSize='body1'
            palette='inherit'
            variant='bgless'
            spacing={{ ml: 3 }}
          >
            {txt}
          </Link>
        )
      )}
    </Header>
  )
}

export default HomeHeader
