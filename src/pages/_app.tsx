import '../styles/globals.css'
import '../pages/components/Task/task.css'
import type { AppProps } from 'next/app'
import {Navbar} from './components/Navbar'
import React, { useState, useEffect, createContext } from "react"
import { User } from "../src/type/interfaces"
import {getCurrentUser} from '../src/api/login/auth'
import {useRouter} from 'next/router'
import Top from './top'
import Register from './register'
import Login from './login'
import {execTest} from '../src/api/test'
import Cookies from "js-cookie"


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

  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<User | undefined>()
  const [loading, setLoading] = useState<boolean>(false)


  const handleGetCurrentUser = async () => {

    try {

      const _access_token = Cookies.get("_access_token")
      const _client = Cookies.get("_client")
      const _uid = Cookies.get("_uid")
      
      const params = {
        "access-token": _access_token,
        "client": _client,
        "uid": _uid    
      }


      const res = await getCurrentUser(params)
      console.log(res)
      console.log(res.data.is_login)

      if (res?.data.is_login === true) {
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
    execTest()
    console.log()
    handleGetCurrentUser()
  }, [setCurrentUser])

  const Private = ({ children }: any) => {
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
