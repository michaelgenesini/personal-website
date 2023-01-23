import Head from 'next/head'
import { Main } from 'src/components/Main'
import { Meta } from 'src/components/Meta'
import { Hero } from 'src/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <Meta />
      </Head>
      <Main>
        <Hero />
      </Main>
    </>
  )
}
