import React, { FC, useEffect, useState, useRef } from 'react'
// import {AxiosPromise as Promise } from 'axios'

import { Google } from '../icons'
import { Button } from '@ui'
import { ButtonProps } from '../../ui/button'

type AuthInstance = {
    isSignedIn: {
        get: () => boolean
        listen: (callback: () => void) => void
    }
    signIn: () => void
    signOut: () => void
}

declare global {
    interface Window {
        gapi: {
            load: (libName: string, onLoad: () => void) => void
            client: {init: (a: {clientId: string, scope: string}) => any}
            auth2: {
                getAuthInstance: () => AuthInstance
            }
        }
    }
}

type GoogleAuthButton = {
    withIcon?: boolean
} & Partial<ButtonProps>

export const GoogleAuthButton: FC<GoogleAuthButton> = ({ children, withIcon, ...props }: GoogleAuthButton) => {
    const auth = useRef<AuthInstance>(null) as null | { current: AuthInstance }
    const [isSignedIn, setSignedIn] = useState(null as null | boolean)

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '172426483873-2498lv5819kt7mudo023h2cs0ri2kv85.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                if (auth !== null) {
                    auth.current = window.gapi.auth2.getAuthInstance()
                    setSignedIn(auth.current.isSignedIn.get())    
                    auth.current.isSignedIn.listen(onAuthChange)  
                }
            })
        })
    }, [])

    const onAuthChange = () => auth !== null && setSignedIn(auth.current.isSignedIn.get())

    const signUser = () => {
        if (auth !== null) {
            if (isSignedIn) auth.current.signOut()
            else auth.current.signIn()
        }
    }

    return (
        isSignedIn === null ? null : (
            <Button before={withIcon ? <Google /> : null} onClick={signUser} {...props}>
                {children ? children : isSignedIn ? 'Sign out' : 'Sign in with Google'}
            </Button>
        )
    )
}