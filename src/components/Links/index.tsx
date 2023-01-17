import { Fira_Sans } from '@next/font/google';
import Link from 'next/link';
import styles from './index.module.css'
import { useRouter } from "next/router";

const fontBold = Fira_Sans({ weight: "600", subsets: ['latin'] })

const isActive = (route: string, currentRoute: string) => currentRoute === route ? styles.active : ''

export const Links = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={[styles.links, fontBold.className].join(' ')}>
      <ul>
        <li className={isActive('/about', currentRoute)}><Link href="/about">About</Link></li>
        <li className={isActive('/contact', currentRoute)}><Link href="/contact">Contact</Link></li>
        <li className={isActive('/now', currentRoute)}><Link href="/now">Now</Link></li>
        <li><a href="https://michaelgenesini.substack.com/" target="_blank" rel="noreferrer">Writing</a></li>
        <li className={isActive('/reading', currentRoute)}><Link href="/reading">Reading</Link></li>
        <li className={isActive('/working-with-me', currentRoute)}><Link href="/working-with-me">Working with me</Link></li>
        <li className={isActive('/stack', currentRoute)}><Link href="/stack">Stack</Link></li>
      </ul>
    </div>
  )
}
