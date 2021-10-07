import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Navbar} from './components/Navbar'
import Link from 'next/link';
import { useRouter } from 'next/router'
import Top from './top'

const Home: NextPage = () => {
  const router = useRouter()


  return (
    <>
          <Navbar/>
          <br/>
          <Top/>
    </>
  )
}

export default Home
