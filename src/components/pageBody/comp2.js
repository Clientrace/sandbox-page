
import { motion } from 'framer-motion';
import styles from './pageBody.module.scss';

const Component2 = ({delayOffset=0}) => {
  return(
    <motion.div
      className={styles.comp2}
      initial={{opacity: 0, backgroundColor: 'white'}}
      whileInView={{opacity: 1, backgroundColor: 'black'}}
      transition={{delay: delayOffset, duration: 1}}>
      <img src="/imgs/leys.png"/>
      <motion.div className={styles.miniHeader}>
        A wise philospher once quoted on her profile picture:
      </motion.div>
      <motion.div
        className={styles.content}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.5+delayOffset}}>
        "There is only one happiness in this life, to love and be loved."
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 1+delayOffset}}>
        - George Sand
      </motion.div>
    </motion.div>
  )
}

export default Component2;

