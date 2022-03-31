import { memo, FC, ReactNode } from 'react'

import { Box, Typography, Button, BoxProps } from '@ui'
import { LinkOutside } from '@icons'
import createMeal from 'components/modal/create_meal'

type PlaceholderProps = {
  title?: string
  text?: string
  linkText?: string
  cb?: ReactNode | (() => void)
} & BoxProps

const Placeholder: FC<PlaceholderProps> = memo(
  ({
    title = "You haven't created any items yet.",
    text = 'Go ahead and create one!',
    linkText = 'Get started',
    cb = createMeal,
    ...props
  }: PlaceholderProps) => (
    <Box
      palette='secondary'
      center
      column
      fontSize='body1'
      border
      spacing={{ p: 2 }}
      font='secondary'
      style={{ borderRadius: 5 }}
      {...props}
    >
      <Typography color='primary' weight={500} spacing={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography spacing={{ mb: 2 }}>{text}</Typography>
      {cb instanceof Function ? (
        <>
          <Button
            onClick={cb}
            after={<LinkOutside />}
            color='info'
            className='placeholder-callback'
          >
            {linkText}
          </Button>
          <style jsx global>{`
            .placeholder-callback:hover:after {
              content: '';
              display: block;
              position: absolute;
              height: 0;
              left: 0;
              right: 0;
              bottom: -5px;
              border-bottom: 1px solid;
            }
          `}</style>
        </>
      ) : (
        <>{cb}</>
      )}
    </Box>
  )
)

export default Placeholder
