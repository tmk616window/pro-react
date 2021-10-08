import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Link from 'next/link';
import { useRouter } from 'next/router'
import Top from './top'
import {execTest} from '../src/api/test'


const Home: NextPage = () => {
  const router = useRouter()


  return (
    <>
          <Top/>
    </>
  )
}

export default Home
