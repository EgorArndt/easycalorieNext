import { FC } from 'react'

import {
  Menu,
  MenuButton,
  Box,
  Label,
  Textarea,
  Typography,
  MenuProps,
  Icon,
  Button,
} from '@ui'
import { Stareyes, Smile, Sad, Cry } from '@icons'

type FeedbackButtonProps = Omit<MenuProps, 'menuButton'>

const FeedbackButton: FC<FeedbackButtonProps> = ({
  ...menuProps
}: FeedbackButtonProps) => (
  <Menu
    offsetX={-70}
    offsetY={-40}
    palette='primary'
    {...menuProps}
    menuButton={
      <MenuButton
        border
        palette='inherit'
        size='s'
        variant='ghost'
        style={{ cursor: 'text' }}
      >
        Feedback
      </MenuButton>
    }
  >
    <Box wrap column boxShadow width={300}>
      <Label id='feedback' spacing={{ py: 0.5, px: 1 }}>
        <Typography
          color='secondary'
          fontSize='caption'
          bold
          uppercase
          font='secondary'
        >
          Feedback
        </Typography>
      </Label>
      <Box spacing={{ mx: 1 }}>
        <Textarea
          noResize
          autoComplete='off'
          id='feedback'
          placeholder='Your feedback...'
        />
      </Box>
      <Box
        palette='secondary'
        align={['space-between', 'center']}
        borderTop
        spacing={{ p: 0.5, px: 1, mt: 1 }}
      >
        <Box gap='0.5rem'>
          {[<Stareyes />, <Smile />, <Sad />, <Cry />].map((i, idx) => (
            <Icon
              i={i}
              key={idx}
              height={30}
              width={30}
              size={20}
              rounded
              border
            />
          ))}
        </Box>
        <Button palette='primary' size='s'>
          Send
        </Button>
      </Box>
    </Box>
  </Menu>
)

export default FeedbackButton
