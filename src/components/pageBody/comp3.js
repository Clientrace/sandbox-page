

import { motion } from 'framer-motion';
import styles from './pageBody.module.scss';

const Component3 = ({delayOffset=0}) => {
  return (
    <motion.div className={styles.comp3}>
      <motion.div className={styles.header}>
        We have a lot of differences
      </motion.div>
      I figure you noticed it already, we're so different that we're like this:
      <motion.div className={styles.image}>
        <motion.img
          src="/imgs/yin-yang.svg"
          initial={{scale: 0.5, rotate: 0}}
          whileInView={{scale: 1, rotate: 180}}
          transition={{duration: 0.8,delay: delayOffset}}/>
      </motion.div>
    </motion.div>
  )
}


export default Component3;




