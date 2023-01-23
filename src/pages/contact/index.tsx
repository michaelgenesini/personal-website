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
        <h1>How you can contact me</h1>

        <p>I would be incredibly happy if you wanted to contact me and talk about anything. Feel free to reach out to me through any of my main channels 🥰</p>

        <p>
          <ul>
            <li><a href="https://linkedin.com/in/michaelgenesini">LinkedIn</a></li>
            <li><a href="">GitHub</a></li>
            <li><a href="">Resume</a></li>
          </ul>
        </p>
      </PageContent>
    </>
  )
}
