import { Typography, Link } from '@ui'

export default function CreateNutritionPlan() {
  return (
    <Typography>
      The Easycalorie platform allows you to
      <Link
        passHref
        to='https://codesandbox.io/s/exploding-crystal-9eeo2?from-embed'
        palette='error'
        variant='contained-reversed'
        spacing={{ p: 0 }}
      >
        &nbsp;create nutrition plans&nbsp;
      </Link>
      in order to achieve your health
      <Link
        passHref
        to='https://codesandbox.io/s/furry-nebula-jorpp?from-embed'
        palette='error'
        variant='contained-reversed'
        spacing={{ p: 0 }}
      >
        &nbsp;goals
      </Link>
      . Whether it is losing, gaining or maintaining weight. The algorithm of
      how to approach creating a meal is very simple.
    </Typography>
  )
}
