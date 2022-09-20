
import styles from "./upperBanner.module.scss"
import { motion } from "framer-motion";

const UpperBanner = () => {
  return (
    <motion.div className={styles.main}>
      <motion.div className={styles.comp1}>
        Hi Babi
        <img src="/imgs/penguin.gif"/>
      </motion.div>
      <motion.div className={styles.comp2}>
        <i>(Or Babe, Leo, Leys, Beb, Leonora)</i>
      </motion.div>
    </motion.div>
  )
}

export default UpperBanner;

