
import { motion } from "framer-motion";
import styles from "./verticalBar.module.scss";

const VerticalBar = ({width=30, delayOffset=0}) => {
  return (
    <motion.div
      className={styles.main}
      initial={{width: 0}}
      animate={{width: '100%'}}
      transition={{duration: 1, delay: delayOffset}}/>
  )
}

export default VerticalBar;


