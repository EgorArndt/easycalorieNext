import { Box, GridGroup, Icon, Typography } from '@ui'
import { useBreakpoints } from '@hooks'
import { columns } from './constants'

const Motivators = () => {
  const { isL, isXs, isS } = useBreakpoints()
  const isMobileSize = isXs || isS

  return (
      <GridGroup 
        align={['center', 'flex-start']}
        wrap
        spacing={{py: 5}}
        itemSize={{min: 340}}
        cols={!isL && 1}
        style={{paddingInline: '10%', rowGap: '3rem'}}
      >
          {columns.map(({ i, title, text }, idx) => {
            const isImage = idx === 1
            return (
              <Box
                key={text}
                align='left'
                gap='2rem'
                borderRight={idx !== 2 && isL}
                spacing={{ px: isMobileSize ? 1 : 4 }}
              >
                <Box center height={100}>
                  <Icon
                    border={!isImage}
                    rounded
                    size={isImage ? 70 : 25}
                    spacing={{ p: 1 }}
                    color='primary'
                    height={isImage ? 60: ''}
                    width={isImage ? 60: ''}
                    style={{overflow: 'hidden'}}
                  >
                    {i}
                  </Icon>
                </Box>
                <Box column>
                  <Typography title color='primary' weight={700} spacing={{mb: 1}}>
                    {title}
                  </Typography>
                  <Typography>{text}</Typography>
                </Box>
              </Box>
            )
          })}
      </GridGroup>
  )
}

export default Motivators
