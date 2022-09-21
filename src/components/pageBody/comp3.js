

import { motion } from 'framer-motion';
import styles from './pageBody.module.scss';

const Component3 = ({delayOffset=0}) => {
  return (
    <motion.div className={styles.comp3}>
      <motion.div className={styles.header}>
        We have a lot of differences
      </motion.div>
      I figure you noticed it already, we&apos;re so different that we&apos;re like this:
      <motion.div className={styles.image}>
        <motion.img
          src="imgs/yin-yang.svg"
          initial={{scale: 0.5, rotate: 0}}
          whileInView={{scale: 1, rotate: 180}}
          transition={{duration: 0.8,delay: delayOffset}}/>
      </motion.div>
      <motion.div className={styles.sub}>
        Black and White, Zero and One, Noir and Blanc.
        <p>We live in two different worlds in the past. Glad we still met :D. These differences caused us
          plenty of fights. I&apos;m really sorry for the moments I made you cry Despite these differences, just like yin and yang,
          we harmonize.
        </p>
      </motion.div>
    </motion.div>
  )
}


export default Component3;




