import Head from 'next/head'
import { Meta } from 'src/components/Meta'
import { PageContent } from 'src/components/PageContent'

export default function WorkingWithMe() {
  return (
    <>
      <Head>
        <Meta />
      </Head>
      <PageContent>
        <h1>Working With Me</h1>

        <p>Working on it 🚧</p>
      </PageContent>
    </>
  )
}
