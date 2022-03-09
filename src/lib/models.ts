import type { User } from 'firebase/auth'

import type { Ingredient } from 'components/modal/create_meal/models'

export type RawUser = User
export type FormattedUser = {
  uid: RawUser['uid']
  email: RawUser['email']
  name: RawUser['displayName']
  provider: RawUser['providerData'][0]['providerId']
  photoUrl: RawUser['photoURL']
  // stripeRole: await getStripeRole(),
  token: string
}

export type Auth = {
  user: FormattedUser | false | null
  isLoading: boolean
  // signinWithEmail?:(redirect: any) => any
  signinWithGitHub: (redirect: any) => any
  // signinWithGoogle?: (redirect: any) => any
  signout: (redirect: any) => any
}

export type Meal = {
  name: string
  ingredients: Array<Ingredient> | []
  id: string
  author: string
  authorId: string
  createdAt: string
  labels: string
  comment: string
  total:
    | {
        carbs: string
        protein: string
        fat: string
        calories: string
      }
    | {}
}
