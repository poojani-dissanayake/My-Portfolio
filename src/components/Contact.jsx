import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaPaperPlane, FaCheck } from 'react-icons/fa';
import styles from './Contact.module.css';

const info = [
  { icon: <FaEnvelope />, label: 'Email', value: 'poojani@example.com' },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Sri Lanka' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', value: 'linkedin.com/in/poojani-dissanayake' },
  { icon: <FaGithub />, label: 'GitHub', value: 'github.com/poojani-dissanayake' },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <Motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </Motion.h2>
      <Motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        Let's connect and collaborate
      </Motion.p>

      <div className={styles.grid}>
        <Motion.div
          className={styles.infoCol}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {info.map((item, i) => (
            <div key={i} className={styles.infoItem}>
              <div className={styles.iconBox}>{item.icon}</div>
              <div>
                <p className={styles.infoLabel}>{item.label}</p>
                <p className={styles.infoValue}>{item.value}</p>
              </div>
            </div>
          ))}
        </Motion.div>

        <Motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea rows={5} placeholder="Your Message" required />
          <Motion.button
            type="submit"
            className={styles.submitBtn}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={sent ? { background: 'linear-gradient(135deg, #00b894, #00cec9)' } : {}}
          >
            {sent ? <><FaCheck /> Message Sent!</> : <><FaPaperPlane /> Send Message</>}
          </Motion.button>
        </Motion.form>
      </div>
    </section>
  );
}
