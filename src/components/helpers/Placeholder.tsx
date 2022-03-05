import { FC } from 'react'

import { Box, Typography, Button, BoxProps } from '@ui'
import { Linkoutside } from '@icons'

type PlaceholderProps = {
  title?: string
  text?: string
  linkText?: string
  cb?: () => void
} & BoxProps

const Placeholder: FC<PlaceholderProps> = ({
  title,
  text,
  linkText,
  cb,
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
    {title && (
      <Typography color='primary' weight={500} spacing={{ mb: 1 }}>
        {title}
      </Typography>
    )}
    {text && <Typography spacing={{ mb: 2 }}>{text}</Typography>}
    {cb && (
      <>
        <Button
          onClick={cb}
          after={<Linkoutside />}
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
    )}
  </Box>
)

export default Placeholder
