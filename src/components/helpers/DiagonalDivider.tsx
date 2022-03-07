import { Box, BoxProps } from '@ui'

const DiagonalDivider = ({ ...props }) => (
  <Box
    border
    height={30}
    width={2}
    spacing={{ mx: 2 }}
    style={{ transform: 'rotate(25deg)' }}
    {...props}
  />
)

export default DiagonalDivider
