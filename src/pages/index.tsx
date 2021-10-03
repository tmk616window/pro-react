import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Top} from './components/Top'
import {Navbar} from './components/Navbar'
import {TaskList} from './components/Task/TaskList'
import Link from 'next/link';
// import {ActiveLink} from './api/ActiveLink'
import {Login} from './components/Login'
import {Register} from './components/Register'
import {ProfilePage} from './components/ProfilePage'

const Home: NextPage = () => {
  return (
    <>
          <Navbar/>
          {/* <Register/> */}
          {/* <Login/> */}
          {/* <TaskList/> */}
          {/* <Top/> */}
          <ProfilePage/>

    </>
  )
}

export default Home
