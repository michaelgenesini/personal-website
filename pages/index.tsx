import Head from 'next/head'
import Image from 'next/image'
import { Lora } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const font = Lora({ subsets: ['latin'] })
const fontBold = Lora({ weight: "600", subsets: ['latin'] })

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
        <section className={styles.section}>
        <Link href="/">
            <Image
              src="/logo.svg"
              alt="Mike Logo"
              className={styles.logo}
              width={267}
              height={46}
              priority
            />
          </Link>
          <h1 className={font.className}>Michael Genesini</h1>
          <h2 className={font.className}>Engineering Manager</h2>

          <nav className={[styles.nav, fontBold.className].join(' ')}>
            <ul>
              <li><a href="https://michaelgenesini.substack.com/" target="_blank" rel="noreferrer">About</a></li>
              <li><a href="https://michaelgenesini.substack.com/" target="_blank" rel="noreferrer">Contact</a></li>
              <li><a href="https://michaelgenesini.substack.com/" target="_blank" rel="noreferrer">Now</a></li>
              <li><a href="https://michaelgenesini.substack.com/" target="_blank" rel="noreferrer">Writing</a></li>
              <li><a href="https://michaelgenesini.substack.com/" target="_blank" rel="noreferrer">Reading</a></li>
              <li><a href="https://michaelgenesini.substack.com/" target="_blank" rel="noreferrer">Working with me</a></li>
              <li><a href="https://michaelgenesini.substack.com/" target="_blank" rel="noreferrer">Stack</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </>
  )
}
