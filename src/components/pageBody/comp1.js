
import { motion } from 'framer-motion';
import styles from './pageBody.module.scss';
import VerticalBar from '../../components/effects/verticalBar/verticalBar.js';

const Component1 = () => {
  return (
    <motion.div className={styles.comp1}>
      First off,
      <motion.div className={styles.header}>
        I Love You
      </motion.div>
      <motion.div>
        <VerticalBar width={'100px'}/>
      </motion.div>
    </motion.div>
  )
}

export default Component1;

