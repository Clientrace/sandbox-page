
import { motion } from 'framer-motion';
import styles from './pageBody.module.scss';
import Component1 from './comp1';

const PageBody = ({delayOffset=0}) => {
  return (
    <motion.div className={styles.main}>
      <Component1 delayOffset={0.5}/>
    </motion.div>
  )
}


export default PageBody;


