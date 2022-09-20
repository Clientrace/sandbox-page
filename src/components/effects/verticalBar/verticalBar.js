
import { motion } from "framer-motion";
import styles from "./verticalBar.module.scss";

const VerticalBar = ({width='100%', delayOffset=0}) => {
  return (
    <div className={styles.main}>
      <div style={{
        width: width
      }}>
        <motion.div
          className={styles.bar}
          initial={{width: 0}}
          whileInView={{width: '100%'}}
          transition={{duration: 1, delay: delayOffset}}/>
      </div>
    </div>
  )
}

export default VerticalBar;


