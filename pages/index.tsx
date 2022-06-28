import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Trending from '../components/Trending'
import CMCTable from '../components/cmc-table/CmcTable'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <div className="mt-10" />
      <Trending />
      <div className="mt-20" />
      <CMCTable />

    </div>
  )
}

export default Home
