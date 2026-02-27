import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaProjectDiagram, FaChartBar, FaCertificate, FaClock } from 'react-icons/fa';
import styles from './Stats.module.css';

const stats = [
  { icon: <FaProjectDiagram />, target: 10, label: 'Projects Completed' },
  { icon: <FaChartBar />, target: 15, label: 'Dashboards Created' },
  { icon: <FaCertificate />, target: 5, label: 'Certifications' },
  { icon: <FaClock />, target: 500, label: 'Hours of Analysis' },
];

function Counter({ target, start }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const duration = 2000;
    const step = target / (duration / 16);

    const update = () => {
      current += step;
      if (current < target) {
        setCount(Math.floor(current));
        rafRef.current = requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };
    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, target]);

  return <span>{count}+</span>;
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.grid}>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(108,92,231,0.15)' }}
          >
            <div className={styles.icon}>{s.icon}</div>
            <div className={styles.count}>
              <Counter target={s.target} start={inView} />
            </div>
            <p>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
