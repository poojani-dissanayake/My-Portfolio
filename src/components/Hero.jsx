import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaEnvelope, FaLinkedinIn, FaGithub, FaChevronDown } from 'react-icons/fa';
import styles from './Hero.module.css';

const phrases = [
  'Quality Management Professional',
  'Data Analytics Enthusiast',
  'Lean & Six Sigma Practitioner',
  'Power BI Dashboard Developer',
  'Process Optimization Specialist',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, 65);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      }, 30);
    } else {
      setDeleting(false);
      setPhraseIdx((phraseIdx + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Hi, I'm <span className={styles.accent}>Poojani Dissanayake</span>
      </motion.h1>

      <motion.div
        className={styles.typingWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <span className={styles.typing}>{text}</span>
        <span className={styles.cursor}>|</span>
      </motion.div>

      <motion.p
        className={styles.desc}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        Quality Management Undergraduate · Lean &amp; Six Sigma Enthusiast · Data-Driven Problem Solver passionate about transforming processes through analytics.
      </motion.p>

      <motion.div
        className={styles.btns}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
      >
        <button className={styles.btnPrimary} onClick={() => scrollTo('#projects')}>
          <FaRocket /> Explore My Work
        </button>
        <button className={styles.btnOutline} onClick={() => scrollTo('#contact')}>
          <FaEnvelope /> Get In Touch
        </button>
      </motion.div>

      <motion.div
        className={styles.socials}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a href="https://linkedin.com/in/poojani-dissanayake" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="https://github.com/poojani-dissanayake" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="mailto:poojani@example.com" aria-label="Email"><FaEnvelope /></a>
      </motion.div>

      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => scrollTo('#about')}
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
}
