import { FC } from 'react'

import { Box, Button, Typography } from '@ui'
import { useBreakpoints } from '@hooks'
import { headerHeight } from '@layouts/constants'
import s from './styles.module.scss'

const HomeHero: FC = () => {
  const { isXs } = useBreakpoints()

  return (
    <Box
      style={{ minHeight: `calc(100vh - ${headerHeight})` }}
      column
      center
      gap='4rem'
    >
      <Typography className={s.title} color='primary' spacing={{ mt: 1 }}>
        Find. <br />
        Add. <br />
        Enjoy.
      </Typography>
      <Box column={isXs} center width='100%' palette='primary'>
        {['Give it a go', 'Useless button'].map((txt) => {
          const isBlack = txt === 'Give it a go'

          return (
            <Button
              key={txt}
              border={!isBlack}
              palette={isBlack ? 'primary' : 'inherit'}
              variant={!isBlack && 'ghost'}
              size='l'
              width={isXs && '100%'}
              unresponsiveSize
              spacing={isXs ? { mt: 1 } : { mx: 1 }}
            >
              {txt}
            </Button>
          )
        })}
      </Box>
      <span className={s.catch__phrase}>
        Awareness of what you eat is where a healthy lifestyle begins.
      </span>
    </Box>
  )
}

export default HomeHero
