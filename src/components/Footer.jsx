import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="https://linkedin.com/in/poojani-dissanayake" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="https://github.com/poojani-dissanayake" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="mailto:poojani@example.com" aria-label="Email"><FaEnvelope /></a>
      </div>
      <p>&copy; 2026 Poojani Dissanayake &middot; Quality &amp; Data Analytics Portfolio</p>
    </footer>
  );
}
