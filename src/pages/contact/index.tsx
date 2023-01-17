import Head from 'next/head'
import { Lora } from '@next/font/google'
import styles from 'styles/Contact.module.css'
import { Header } from 'src/components/Header'

const font = Lora({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Genesini</title>
        <meta name="description" content="Michael Genesini - Engineering Manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main>
        <Header />

        <section className={[styles.section, font.className].join(' ')}>
          <h1>How you can contact me</h1>

          <p>I would be incredibly happy if you wanted to contact me and talk about anything. Feel free to reach out to me through any of my main channels 🥰</p>

          <p>
            <ul>
              <li><a href="https://linkedin.com/in/michaelgenesini">LinkedIn</a></li>
              <li><a href="">GitHub</a></li>
              <li><a href="">Resume</a></li>
            </ul>
          </p>
        </section>
      </main>
    </>
  )
}
