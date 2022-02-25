import { FC } from 'react'

import { Box, Button, Typography } from '@ui'
import { useBreakpoints } from '@hooks'
import s from './styles.module.scss'

const Hero: FC = () => {
  const { isXs } = useBreakpoints()

  return (
    <div className={s.hero}>
      <Box isAppContainer column center childrenSpacing={{ mt: 4 }}>
        <Typography
          className={s.title}
          color='primary'
          aria-label='Find. Add. Enjoy.'
          spacing={{ mt: 2, mb: 1 }}
        >
          Find. <br />
          Add. <br />
          Enjoy.
        </Typography>
        <Box column={isXs} center width='100%'>
          {['Give it a go', 'Useless button'].map((txt) => {
            const isBlack = txt === 'Give it a go'
            return (
              <Button
                key={txt}
                palette={isBlack ? 'primary' : 'secondary'}
                style={{ border: isBlack && '1px solid' }}
                border={!isBlack}
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
          Easycalorie provides you with a database to extract information about
          all the foods you can think of from there and tools to accurately
          integrate those in your nutrition plan.
        </span>
      </Box>
    </div>
  )
}

export default Hero
