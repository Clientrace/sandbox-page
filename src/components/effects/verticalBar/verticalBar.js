
import { motion } from "framer-motion";
import styles from "./verticalBar.module.scss";

const VerticalBar = ({width='100%', delayOffset=0, text=""}) => {
  return (
    <div className={styles.main}>
      <div style={{
        width: width
      }}>
        <motion.div
          className={styles.bar}
          initial={{width: 0}}
          whileInView={{width: '100%'}}
          transition={{duration: 1, delay: delayOffset}}>
          <motion.a
            className={styles.text}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 1 + delayOffset}}>
            {text}
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default VerticalBar;


