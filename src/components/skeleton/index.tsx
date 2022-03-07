import _Skeleton, { SkeletonTheme, SkeletonProps } from 'react-loading-skeleton'
import { withTheme } from '@emotion/react'

import { skeletonTheme } from './constants'
import { AppTheme } from '@theme/models'

const Skeleton = ({
  theme: {
    mutatable: {
      global: { bg },
    },
  },
  ...props
}: { theme: AppTheme } & SkeletonProps) => (
  <SkeletonTheme
    baseColor={skeletonTheme[bg as '#000' | '#fff'].baseColor}
    highlightColor={skeletonTheme[bg as '#000' | '#fff'].highlightColor}
  >
    <_Skeleton {...props} />
  </SkeletonTheme>
)

export default withTheme(Skeleton)
