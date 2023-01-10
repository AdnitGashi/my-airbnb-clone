import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'


export default function Home() {
  return (
    <>
      <Head>
        <title>test repo access</title>
      </Head>
      <main>
        <Header />
        <Banner/>
      </main>
    </>
  )
}
