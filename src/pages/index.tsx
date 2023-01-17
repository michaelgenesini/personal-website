import Head from 'next/head'
import { Lora } from '@next/font/google'
import styles from 'styles/Home.module.css'
import Link from 'next/link'
import { Logo } from 'src/components/Logo'
import { Links } from 'src/components/Links'

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
        <section className={styles.section}>
          <Link href="/">
            <Logo />
          </Link>
          <h1 className={[font.className, styles.title].join(' ')}>Michael Genesini</h1>
          <h2 className={[font.className, styles.subtitle].join(' ')}>Engineering Manager</h2>

          <nav className={styles.nav}>
            <Links />
          </nav>
        </section>
      </main>
    </>
  )
}
