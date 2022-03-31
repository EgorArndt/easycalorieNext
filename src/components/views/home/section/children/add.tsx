import { FC } from 'react'
import Image from 'next/image'

import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
} from '@ui'
import { Line } from '../../helpers/line'
import { Titlebox } from 'components/helpers'

import food1 from '@public/food/1.jpg'
import food2 from '@public/food/2.jpg'
import food3 from '@public/food/3.jpg'

const Add: FC = () => {
  const steps = [
    { img: food1, title: 'Find a food you like' },
    { img: food2, title: 'Configure a meal as if it was a setting' },
    { img: food3, title: 'Add it to your plan' },
  ]
  return (
    <>
      <Line color='grey' style={{ marginTop: '3rem' }} />
      <Timeline position='opposite'>
        {steps.map(({ img, title }) => {
          const isLastItem = title === 'Add it to your plan'

          return (
            <TimelineItem key={title} minHeight={300}>
              <TimelineContent spacing={{ pr: 4 }}>
                <Image placeholder='blur' src={img} />
              </TimelineContent>
              <TimelineSeparator>
                <TimelineDot />
                {isLastItem ? (
                  <Line
                    style={{ height: '100%', paddingLeft: 1 }}
                    color='orange-grey'
                  />
                ) : (
                  <TimelineConnector style={{ color: '#999' }} look='dashed' />
                )}
              </TimelineSeparator>
              <TimelineContent spacing={{ pl: 4 }}>
                <Titlebox title={title} align='left'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  minima reprehenderit laborum, tempore iure minus.
                </Titlebox>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </>
  )
}

export default Add
