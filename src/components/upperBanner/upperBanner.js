
import styles from "./upperBanner.module.css"
import { motion } from "framer-motion";

const UpperBanner = () => {
  return (
    <motion.div className={styles.main}>
      Hi, Babe
    </motion.div>
  )
}


export default UpperBanner;

