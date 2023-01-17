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
        <h1>Reading</h1>

        <p>Working on it 🚧</p>
        </section>
      </main>
    </>
  )
}
