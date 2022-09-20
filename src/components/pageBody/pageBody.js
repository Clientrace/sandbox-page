
import { motion } from 'framer-motion';
import styles from './pageBody.module.scss';
import Component2 from './comp2';
import Component1 from './comp1';

const PageBody = ({delayOffset=0}) => {
  return (
    <motion.div className={styles.main}>
      <Component2 delayOffset={0.5}/>
      <Component1 delayOffset={1.5}/>
    </motion.div>
  )
}


export default PageBody;


