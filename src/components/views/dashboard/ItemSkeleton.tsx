import Skeleton from 'components/skeleton'
import { Box } from '@ui'

const ItemSkeleton = ({ count = 6 }: { count?: number }) => (
  <>
    {Array.from({ length: count }, (_, i) => i).map((i) => (
      <Box key={i} align={['left', 'flex-start']}>
        <Skeleton circle height={70} width={70} />
        <Box column width='100%' spacing={{ ml: 1 }}>
          <Skeleton count={3} height={8} />
        </Box>
      </Box>
    ))}
  </>
)

export default ItemSkeleton
