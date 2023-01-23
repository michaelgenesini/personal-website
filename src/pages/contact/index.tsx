import Head from 'next/head'
import { Lora } from '@next/font/google'
import { PageContent } from 'src/components/PageContent'
import { Meta } from 'src/components/Meta'

const font = Lora({ subsets: ['latin'] })

export default function Contact() {
  return (
    <>
      <Head>
        <Meta />
      </Head>
      <PageContent>
        <h1>Hello, let&apos;s talk</h1>

        <p>I&apos;m quite active on <a href="https://linkedin.com/in/michaelgenesini" target="_blank" rel="noreferrer">LinkedIn</a>, if you want to reach out to me feel free to connect and send a message 🥰</p>
      </PageContent>
    </>
  )
}
