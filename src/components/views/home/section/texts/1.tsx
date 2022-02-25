import { Typography, Link } from '@ui'

export default function StartWithTheDatabase() {
  return (
    <>
      <Typography>
        Users love our database, powered by the strongest search engines like
        Google.
        <Link
          passHref
          to='https://codesandbox.io/s/react-three-fiber-donut-in-space-q3n4f?file=/src/components/donut.js'
          palette='info'
          variant='contained-reversed'
          spacing={{ p: 0 }}
        >
          &nbsp;Top level bodybuilders&nbsp;
        </Link>
        and health specialists recommend using it to improve the accuracy of
        your nutrition preparations.
      </Typography>
      <Typography>
        Easycalorie is the best place to get you started on your healthy trip.
        <Link
          passHref
          to='https://codesandbox.io/s/floating-laptop-q23sw?from-embed'
          palette='info'
          variant='contained-reversed'
          spacing={{ p: 0 }}
        >
          &nbsp;Start by making use of our database&nbsp;
        </Link>
        and create a meal. Scale dynamically to dozens of meals to compose your
        first nutrition plan.
      </Typography>
    </>
  )
}
