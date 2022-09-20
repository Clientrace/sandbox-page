
import { motion } from 'framer-motion';
import styles from './pageBody.module.scss';
import VerticalBar from '../../components/effects/verticalBar/verticalBar.js';

const Component1 = ({delayOffset}) => {
  return (
    <motion.div
      className={styles.comp1}
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1, delay: delayOffset}}>
      First off,
      <motion.div
        className={styles.header}
        initial={{opacity: 0, fontSize: '40px'}}
        whileInView={{opacity: 1, fontSize: ['40px', '60px', '40px']}}
        transition={{duration: 0.5, delay: 1 + delayOffset}}>
        I Love You
      </motion.div>
      <motion.div
        className={styles.sub1}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 2 + delayOffset}}>
        How much? I hear you ask. 
        <motion.a initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 3 + delayOffset}}>
          This much:
        </motion.a>
      </motion.div>
      <motion.div>
        <VerticalBar width={'800px'} delayOffset={4 + delayOffset} text={<b>100%</b>}/>
      </motion.div>
    </motion.div>
  )
}

export default Component1;

