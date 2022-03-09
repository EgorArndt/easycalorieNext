import { useState, useEffect, useContext, createContext, FC } from 'react'
import Router from 'next/router'
import {
  getAuth,
  signOut,
  signInWithPopup,
  GithubAuthProvider,
  onIdTokenChanged,
  NextOrObserver,
} from 'firebase/auth'
// import cookie from 'js-cookie'

import firebase from './firebase'
import { createUser } from './db'
import type { AuthContext, RawUser } from './models'

const auth = getAuth(firebase)

const AuthContext = createContext({} as AuthContext)

const AuthProvider: FC = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthProvider

export const useAuth = (): AuthContext => {
  return useContext(AuthContext)
}

function useProvideAuth() {
  const [user, setUser] = useState(null as AuthContext['user'])
  const [isLoading, setIsLoading] = useState(true)

  const handleUser = async (rawUser: RawUser | false) => {
    if (rawUser) {
      const user = await formatUser(rawUser)
      const { token, ...userWithoutToken } = user

      createUser(userWithoutToken)

      setUser(user)

      // cookie.set('fast-feedback-auth', true, {
      //   expires: 1
      // })

      setIsLoading(false)
      return user
    } else {
      setUser(false)
      // cookie.remove('fast-feedback-auth')

      setIsLoading(false)
      return false
    }
  }

  // const signinWithEmail = (email, password) => {
  //   setIsLoading(true)
  //   return firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then((response) => {
  //       handleUser(response.user)
  //       Router.push('/sites')
  //     })
  // }

  const signinWithGitHub = (redirect: string) => {
    setIsLoading(true)
    signInWithPopup(auth, new GithubAuthProvider())
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        const user = result.user
        handleUser(user)
        if (redirect) {
          Router.push(redirect)
        }
      })
      .catch((err) => {
        const errorCode = err.code
        const errorMessage = err.message
        // The email of the user's account used.
        const email = err.email
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(err)
      })
  }

  // const signinWithGoogle = (redirect) => {
  //   setIsLoading(true)
  //   return firebase
  //     .auth()
  //     .signInWithPopup(new firebase.auth.GoogleAuthProvider())
  //     .then((response) => {
  //       handleUser(response.user)

  //       if (redirect) {
  //         Router.push(redirect)
  //       }
  //     })
  // }

  const signout = async () => {
    Router.push('/')

    return signOut(auth).then(() => handleUser(false))
  }

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(
      auth,
      handleUser as NextOrObserver<RawUser>
    )

    return () => unsubscribe()
  }, [])

  return {
    user,
    isLoading,
    // signinWithEmail,
    signinWithGitHub,
    // signinWithGoogle,
    signout,
  }
}

// const getStripeRole = async () => {
//   await firebase.auth().currentUser.getIdToken(true)
//   const decodedToken = await firebase.auth().currentUser.getIdTokenResult()

//   return decodedToken.claims.stripeRole || 'free'
// }

const formatUser = async (user: RawUser) => {
  const token = await user.getIdToken()
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    // stripeRole: await getStripeRole(),
    token,
  }
}
