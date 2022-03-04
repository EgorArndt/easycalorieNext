export type AuthContext = {
  user?: any
  loading?: boolean
  // signinWithEmail?:(redirect: any) => any
  signinWithGitHub?: (redirect: any) => any
  // signinWithGoogle?: (redirect: any) => any
  signout?: () => any
}
