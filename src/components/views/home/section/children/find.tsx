import { FC } from 'react'
import Image from 'next/image'

import { Box } from '@ui'
import { Titlebox } from '../../helpers/titlebox'
import { Small } from '../../helpers/small'
import { Apple, Android } from '@icons'
import db1 from '../../../../../../public/database/1.jpg'

const Find: FC = () => (
  <Box column center gap='2rem'>
    <Box wrap center spacing={{ mt: 3 }} gap='3rem'>
      <Image layout='intrinsic' placeholder='blur' src={db1} />
      <Box
        column
        align={['center', 'left']}
        gap='4rem'
        style={{ maxWidth: 400 }}
      >
        {[
          'Food database',
          'Scientifically approved',
          'Totally free to use',
        ].map((str) => (
          <Titlebox key={str} title={str} align='left'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
            nisi..
          </Titlebox>
        ))}
      </Box>
    </Box>
    <Box column center spacing={{ mt: 3 }}>
      <Small spacing={{ mb: 1 }}>Adapted to be used on mobile devices</Small>
      <span>
        <Android height='2.3em' width='2.3em' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Apple height='2.3em' width='2.3em' />
      </span>
    </Box>
  </Box>
)

export default Find
