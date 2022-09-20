
import { motion } from 'framer-motion';
import styles from './scrollDown.module.scss';
import arrow from './arrow.module.scss';

const ScrollDown = ({delayOffset=0}) => {
  return (
    <motion.div
      className={styles.main}
      initial={{opacity: 0, y:-10}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: delayOffset}}>
      <motion.div className={styles.comp1}>
        Scroll Down To See More
      </motion.div>
      <motion.div className={styles.comp2}>
        <div className={arrow.arrow}/>
      </motion.div>
    </motion.div>
  )
}

export default ScrollDown;

