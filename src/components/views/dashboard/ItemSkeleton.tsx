import Skeleton from 'components/skeleton'
import { Card } from 'components/helpers'
import { Box } from '@ui'

const Bones = ({ long }: { long?: true | null }) => 
  <Box column>
    <Skeleton height={15} width={100} />
    {long !== null && <Skeleton height={15} width={long ? 150 : 80} />}
  </Box>

const ItemSkeleton = ({ count = 6 }: { count?: number }) => (
  <>
    {Array.from({ length: count }, (_, i) => i).map((i) => (
      <Card
        key={i}
        gap='1rem'
        header={
          <Box align={['left', 'center']} gap='1rem'>
            <Skeleton circle height={50} width={50} />
            <Bones />
          </Box>
        }
        body={<Bones long />}
        footer={<Bones long={null} />}
      />
    ))}
  </>
)

export default ItemSkeleton
