import { memo } from 'react'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'

import { Card } from 'components/helpers'
import { Box, Typography, Button } from '@ui'
import { ThreeDots } from '@icons'
import logo from '@public/logo.png'

type ItemProps = {
  name: string
  labels?: string
  comment?: string
  date: string
}

const Item = memo(({ name, labels, comment, date }: ItemProps) => {
  console.log('item ran')
  return (
    <Card
      header={
        <Box gap='1rem' height={50} width='100%' align={['left', 'center']}>
          <Box height={30} width={30}>
            <Image src={logo} layout='intrinsic' />
          </Box>
          <Box column>
            <Typography color='primary' fontSize='body2' bold>
              {name}
            </Typography>
            {labels && <Typography>{labels}</Typography>}
          </Box>
          <Button
            before={<ThreeDots />}
            palette='inherit'
            variant='ghost'
            style={{ marginLeft: 'auto' }}
          />
        </Box>
      }
      body={comment && <Typography weight={500}>{comment}</Typography>}
      footer={
        <Typography fontSize='caption'>
          {format(parseISO(date), 'PPpp')}
        </Typography>
      }
      fontSize='body1'
      gap='1rem'
    />
  )
})

export default Item
