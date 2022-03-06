import { FC } from 'react'
import Image from 'next/image'

import { DndZone, DndItem, DndZoneProps } from 'components/dnd'
import { Card } from 'components/helpers/card'
import { Box, Typography, Button } from '@ui'
import { ThreeDots } from '@icons'
import logo from '@public/logo.png'

type ItemContainerProps = {
  items: Array<{
    title: string
    subtitle: string
    text: string
    imgSrc?: string
  }>
} & Omit<DndZoneProps, 'children'>

export const ItemContainer: FC<ItemContainerProps> = ({
  items,
  ...dndProps
}: ItemContainerProps) => {
  return (
    <DndZone gap='1rem' itemSize={{ min: 300 }} {...dndProps}>
      {items.map(({ title, subtitle, text, imgSrc }) => (
        <DndItem key={title}>
          {({ handle }) => (
            <Card
              {...handle}
              header={
                <Box
                  gap='1rem'
                  height={50}
                  width='100%'
                  align={['left', 'center']}
                >
                  <Box height={30} width={30}>
                    <Image src={imgSrc || logo} layout='intrinsic' />
                  </Box>
                  <Box column>
                    <Typography color='primary' fontSize='body2' bold>
                      {title}
                    </Typography>
                    <Typography>{subtitle}</Typography>
                  </Box>
                  <Button
                    before={<ThreeDots />}
                    palette='inherit'
                    variant='ghost'
                    style={{ marginLeft: 'auto' }}
                  />
                </Box>
              }
              body={<Typography weight={500}>{text}</Typography>}
              footer={<Typography fontSize='caption'>16h ago</Typography>}
              fontSize='body1'
              gap='1rem'
            />
          )}
        </DndItem>
      ))}
    </DndZone>
  )
}
