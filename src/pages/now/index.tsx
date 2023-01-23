import Head from 'next/head'
import { Meta } from 'src/components/Meta'
import { PageContent } from 'src/components/PageContent'

export default function Now() {
  return (
    <>
      <Head>
        <Meta />
      </Head>
      <PageContent>
        <h1>Now</h1>

        <p>Working on it 🚧</p>
      </PageContent>
    </>
  )
}
