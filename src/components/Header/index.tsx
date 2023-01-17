import Image from 'next/image';
import { Links } from 'src/components/Links';
import styles from './index.module.css'
import Link from 'next/link';

export const Header = () => (
  <header>
    <div className={styles.logo}>
      <Link href="/">
        <Image
          src="/logo-name.svg"
          alt="Mike Logo"
          width={267}
          height={46}
          priority
        />
      </Link>
    </div>
    <nav>
      <Links />
    </nav>
  </header>
)
