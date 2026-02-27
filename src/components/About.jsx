import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserGraduate, FaChartLine, FaCogs, FaDatabase } from 'react-icons/fa';
import styles from './About.module.css';

const highlights = [
  { icon: <FaUserGraduate />, label: 'BSc (Hons) ISQM' },
  { icon: <FaChartLine />, label: 'Power BI Expert' },
  { icon: <FaCogs />, label: 'Lean & Six Sigma' },
  { icon: <FaDatabase />, label: 'Data Analytics' },
];

const containerV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemV = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className={styles.section} ref={ref}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Getting to know me better
      </motion.p>

      <div className={styles.grid}>
        <motion.div
          className={styles.imgWrap}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Poojani Dissanayake" className={styles.avatar} />
        </motion.div>

        <motion.div
          className={styles.textWrap}
          variants={containerV}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h3 variants={itemV}>Quality &amp; Data Analytics Enthusiast</motion.h3>
          <motion.p variants={itemV}>
            I am a third-year undergraduate pursuing <strong>BSc (Hons) Industrial &amp; Service Quality Management</strong> at General Sir John Kotelawala Defence University. I specialize in process optimization, quality tools, Lean principles, and data analytics using Power BI.
          </motion.p>
          <motion.p variants={itemV}>
            My passion lies in turning raw data into actionable insights and optimizing processes to achieve operational excellence. I thrive on solving complex problems with data-driven methodologies.
          </motion.p>

          <motion.div className={styles.highlights} variants={containerV}>
            {highlights.map((h, i) => (
              <motion.div key={i} className={styles.badge} variants={itemV}>
                <span className={styles.badgeIcon}>{h.icon}</span>
                {h.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
