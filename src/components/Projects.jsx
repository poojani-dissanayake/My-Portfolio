import { motion as Motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGlobe, FaStore, FaTools, FaStream } from 'react-icons/fa';
import styles from './Projects.module.css';

const projects = [
  {
    icon: <FaGlobe />,
    title: 'Global Sales Performance Analytics',
    desc: 'Developed interactive Power BI dashboards to analyze multi-region sales performance, identify trends, and optimize ROI across global markets.',
    tags: ['Power BI', 'DAX', 'Sales Analytics'],
  },
  {
    icon: <FaStore />,
    title: 'Global Superstore Analysis',
    desc: 'Evaluated 50,000+ transactions to identify high-profit regions, product segment performance, and strategies to reduce return impact.',
    tags: ['Power BI', 'Data Cleaning', 'KPI Tracking'],
  },
  {
    icon: <FaTools />,
    title: 'Service Quality Improvement',
    desc: 'Conducted systematic root cause analysis on university service delays using quality tools, proposed actionable process improvements.',
    tags: ['RCA', 'Fishbone', 'PDCA'],
  },
  {
    icon: <FaStream />,
    title: 'Value Stream Mapping Study',
    desc: 'Created current & future state maps for manufacturing processes to identify and eliminate waste, optimizing overall process flow.',
    tags: ['VSM', 'Lean', 'Process Flow'],
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className={styles.section} ref={ref}>
      <Motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Projects
      </Motion.h2>
      <Motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        Featured work &amp; case studies
      </Motion.p>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <Motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            whileHover={{
              y: -10,
              boxShadow: '0 20px 50px rgba(108,92,231,0.15)',
            }}
          >
            <div className={styles.topBar} />
            <div className={styles.icon}>{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className={styles.tags}>
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
