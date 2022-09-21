
import styles from "./upperBanner.module.scss"
import { motion } from "framer-motion";

const UpperBanner = ({delayOffset=0}) => {
  return (
    <motion.div className={styles.main}>

      <motion.div
        className={styles.comp1}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}>
        Hi Babi
        <img src="imgs/penguin.gif"/>
      </motion.div>
      <motion.div
        className={styles.comp2}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 0.3 + delayOffset}}>
        <i>(Or Babe, Leo, Leys, Beb, Leonora)</i>
      </motion.div>

    </motion.div>
  )
}

export default UpperBanner;

