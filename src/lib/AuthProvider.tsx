import { useState, useEffect, useContext, createContext } from 'react'
import {
  getAuth,
  signOut,
  signInWithPopup,
  GithubAuthProvider,
  onIdTokenChanged,
} from 'firebase/auth'
import Router from 'next/router'
// import cookie from 'js-cookie'

import { firebase } from './config'
import { createUser } from './db'
import { AuthContext } from './models'

const auth = getAuth(firebase)

const AuthContext = createContext(null as null | AuthContext)

//@ts-ignore
export default function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

function useProvideAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
//@ts-ignore

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser)
      const { token, ...userWithoutToken } = user

      createUser(user.uid, userWithoutToken)
      //@ts-ignore

      setUser(user)

      // cookie.set('fast-feedback-auth', true, {
      //   expires: 1
      // })

      setLoading(false)
      return user
    } else {
      //@ts-ignore

      setUser(false)
      // cookie.remove('fast-feedback-auth')

      setLoading(false)
      return false
    }
  }

  // const signinWithEmail = (email, password) => {
  //   setLoading(true)
  //   return firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then((response) => {
  //       handleUser(response.user)
  //       Router.push('/sites')
  //     })
  // }
//@ts-ignore

  const signinWithGitHub = (redirect) => {
    setLoading(true)
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
        console.log(credential)
      })
  }

  // const signinWithGoogle = (redirect) => {
  //   setLoading(true)
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
    const unsubscribe = onIdTokenChanged(auth, handleUser)

    return () => unsubscribe()
  }, [])

  return {
    user,
    loading,
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
//@ts-ignore

const formatUser = async (user) => {
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
