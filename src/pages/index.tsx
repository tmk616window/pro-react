import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Top} from './components/Top'
import {Navbar} from './components/Navbar'
import {TaskList} from './components/Task/TaskList'
import Link from 'next/link';
// import {ActiveLink} from './api/ActiveLink'
import {Login} from './components/Login'

const Home: NextPage = () => {
  return (
    <>
          <Navbar/>
          <Login/>
          {/* <TaskList/> */}
          {/* <Top/> */}

    </>
  )
}

export default Home
