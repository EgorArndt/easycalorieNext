import { Box, BoxProps, Typography } from '@ui'

type TotalLineProps = {
  text?: string
  c: number
  p: number
  f: number
  cal: number
} & BoxProps

const TotalLine = ({ text, c, p, f, cal, ...props }: TotalLineProps) => (
  <Box width='100%' center gap='1rem' spacing={{ pb: 1 }} {...props} wrap>
    <Typography color='primary' weight={600}>
      {text ? text : 'Total (g):'}
    </Typography>
    <Typography>{c} Carbs</Typography>
    <Typography>{p} Protein</Typography>
    <Typography>{f} Fat</Typography>
    <Typography>{cal} Calories</Typography>
  </Box>
)

export default TotalLine
