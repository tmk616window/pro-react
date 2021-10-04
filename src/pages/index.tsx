import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Navbar} from './components/Navbar'
import Link from 'next/link';
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()


  return (
    <>

          <Navbar/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <span onClick={() => router.push('/top')}>Click me</span>
          {/* <Register/> */}
          {/* <Login/> */}
          {/* <TaskList/> */}
          {/* <Top/> */}
          {/* <ProfilePage/> */}
          {/* <Task/> */}

    </>
  )
}

export default Home
