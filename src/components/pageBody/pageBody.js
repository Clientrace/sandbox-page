
import { motion } from 'framer-motion';
import styles from './pageBody.module.scss';
import Component3 from './comp3';
import Component2 from './comp2';
import Component1 from './comp1';

const PageBody = ({delayOffset=0}) => {
  return (
    <motion.div className={styles.main}>
      <Component2 delayOffset={0.5}/>
      <Component3 delayOffset={0.8}/>
    </motion.div>
  )
}


export default PageBody;


