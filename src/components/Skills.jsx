import { motion as Motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';

const bars = [
  { label: 'Power BI & Data Visualization', pct: 85 },
  { label: 'Lean & Six Sigma', pct: 80 },
  { label: 'Process Mapping & VSM', pct: 90 },
  { label: 'SQL & Python', pct: 60 },
  { label: 'Statistical Analysis', pct: 75 },
  { label: 'Microsoft Excel', pct: 88 },
];

const tags = [
  'Power BI', 'Python', 'SQL', 'Excel', 'Minitab', 'SPSS',
  'Visio', 'Lean Tools', 'Six Sigma', 'Root Cause Analysis',
  'SPC', 'FMEA', 'Kaizen', '5S Methodology', 'ISO 9001',
];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="skills" className={styles.section} ref={ref}>
      <Motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Skills
      </Motion.h2>
      <Motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        Technologies &amp; competencies I work with
      </Motion.p>

      <div className={styles.container}>
        {/* Bars */}
        <div className={styles.barsCol}>
          {bars.map((b, i) => (
            <Motion.div
              key={b.label}
              className={styles.bar}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={styles.barInfo}>
                <span>{b.label}</span>
                <span>{b.pct}%</span>
              </div>
              <div className={styles.track}>
                <Motion.div
                  className={styles.fill}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${b.pct}%` } : { width: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 1.2, ease: 'easeOut' }}
                />
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Tags */}
        <Motion.div
          className={styles.tagsCol}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3>Tools &amp; Technologies</h3>
          <div className={styles.tags}>
            {tags.map((t, i) => (
              <Motion.span
                key={t}
                className={styles.tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.04, duration: 0.4 }}
                whileHover={{ y: -3, borderColor: '#6c5ce7', color: '#6c5ce7' }}
              >
                {t}
              </Motion.span>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
