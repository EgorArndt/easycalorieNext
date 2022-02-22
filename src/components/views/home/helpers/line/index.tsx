import React, { CSSProperties, FC } from 'react'
import cn from 'classnames'

import { Typography } from '@ui'
import line from './line.module.scss'

export type LineProps = {
  circleContent?: React.ReactNode
  color: 'cyan' | 'purple' | 'orange' | 'grey' | 'orange-grey'
  lineTitle?: string
  style?: CSSProperties
}

export const Line: FC<LineProps> = ({
  circleContent,
  color,
  lineTitle,
  ...props
}: LineProps) => {
  const painter = {
    [line.cyan]: color === 'cyan',
    [line.purple]: color === 'purple',
    [line.orange]: color === 'orange',
    [line.grey]: color === 'grey',
    [line.orange_grey]: color === 'orange-grey',
  }

  return (
    <>
      {color !== 'orange' && (
        <span className={cn(line.line, painter)} {...props}></span>
      )}
      {(circleContent || lineTitle) && (
        <div className={line.circle_container}>
          <span className={cn(line.circle, painter)}>{circleContent}</span>
          <Typography className={cn(line.title, painter)} fontSize='title'>
            {lineTitle}
          </Typography>
        </div>
      )}
    </>
  )
}
