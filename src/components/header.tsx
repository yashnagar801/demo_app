import Link from 'next/link';
import styles from '@/styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/blog" className={styles.link}>Blog</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
