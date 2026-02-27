import { motion as Motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Timeline.module.css';

const items = [
  {
    date: '2023 – Present',
    title: 'BSc (Hons) Industrial & Service Quality Management',
    desc: 'General Sir John Kotelawala Defence University — Studying quality systems, operations research, statistical methods, and Lean Six Sigma methodologies.',
  },
  {
    date: '2024',
    title: 'Power BI Data Analytics Project',
    desc: 'Developed comprehensive dashboards analyzing global retail data, delivering insights on profitability, regional performance, and customer behavior.',
  },
  {
    date: '2024',
    title: 'Lean Six Sigma Case Study',
    desc: 'Applied DMAIC framework and quality tools to analyze service delivery bottlenecks, achieving measurable process improvement recommendations.',
  },
  {
    date: '2023',
    title: 'Quality Management Research',
    desc: 'Conducted research on quality management practices in the Sri Lankan service sector, presenting findings using data visualization techniques.',
  },
];

export default function Timeline() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className={styles.section} ref={ref}>
      <Motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Experience &amp; Education
      </Motion.h2>
      <Motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        My journey so far
      </Motion.p>

      <div className={styles.timeline}>
        {items.map((item, i) => (
          <Motion.div
            key={i}
            className={styles.item}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ x: 6, borderColor: 'rgba(108,92,231,0.3)' }}
          >
            <div className={styles.dot} />
            <span className={styles.date}>{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
