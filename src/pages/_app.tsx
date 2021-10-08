import '../styles/globals.css'
import '../pages/components/Task/task.css'
import type { AppProps } from 'next/app'
import {Navbar} from './components/Navbar'
import React, { useState, useEffect, createContext } from "react"
import { User } from "../src/type/interfaces"
import {getCurrentUser} from '../src/api/login/auth'
import {useRouter} from 'next/router'

export const AuthContext = createContext({} as {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isSignedIn: boolean
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
  currentUser: User | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
})


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(true)
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<User | undefined>()

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()

      if (res?.data.isLogin === true) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.data)

        console.log(res?.data.data)
      } else {
        console.log("No current user")
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  const Private = ({ children }: { children: React.ReactElement }) => {
    if (!loading) {
      if (isSignedIn) {
        return children
      } else {
        return router.replace('/register') 
      }
    } else {
      return <></>
    }
  }


  return (
    <>
    <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser}}>
      <Navbar/>
      <Component {...pageProps} />
    </AuthContext.Provider>
    </>
  )
}
export default MyApp
