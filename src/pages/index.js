import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import UpperBanner from '../components/upperBanner/upperBanner.js';
import ScrollDown from '../components/effects/scrollDown/scrollDown.js';
import PageBody from '../components/pageBody/pageBody.js';
import VerticalBar from '../components/effects/verticalBar/verticalBar.js'
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <div className={styles.main}>
      <UpperBanner/>
      <VerticalBar delayOffset={0.5}/>
      <motion.div
        className={styles.init}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1}}>
        Clarence made you a gift 🎁 
      </motion.div>
      <ScrollDown delayOffset={1.5} topMargin={'300px'}/>
      <PageBody delay={2}/>
    </div>
  )
}

export default Home;


