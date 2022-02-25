import { Typography, Link } from '@ui'

export default function Enjoy() {
  return (
    <>
      <Typography>
        You might think it's a pain to follow a plan,
        <Link
          passHref
          to='https://codesandbox.io/s/furry-nebula-jorpp?from-embed'
          palette='warning'
          variant='contained-reversed'
          spacing={{ p: 0 }}
        >
          &nbsp;but in reality&nbsp;
        </Link>
        it's not only a lot of fun, but also becomes a routine which is easy to
        maintain. In fact, over time you'll start performing your plan preps
        automatically and won't worry the way you did
        <Link
          passHref
          to='https://codesandbox.io/s/xz-spinning-smiley-gyb4q?from-embed'
          palette='warning'
          variant='contained-reversed'
          spacing={{ p: 0 }}
        >
          &nbsp;at the beginning
        </Link>
        .
      </Typography>
      <Typography>
        Once you've developed a plan or two, be quick to share it with others.
        The Easycalorie platform allows you to build a massive network of
        <Link
          passHref
          to='https://codesandbox.io/s/floating-laptop-q23sw?from-embed'
          palette='warning'
          variant='contained-reversed'
          spacing={{ p: 0 }}
        >
          &nbsp;people who share you mindset.
        </Link>
      </Typography>
    </>
  )
}
