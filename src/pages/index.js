import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import UpperBanner from '../components/upperBanner/upperBanner.js';
import ScrollDown from '../components/effects/scrollDown/scrollDown.js';
import PageBody from '../components/pageBody/pageBody.js';
import VerticalBar from '../components/effects/verticalBar/verticalBar.js'


const Home = () => {
  return (
    <div className={styles.main}>
      <UpperBanner/>
      <VerticalBar delayOffset={0.5}/>
      <ScrollDown delayOffset={1.5} topMargin={'300px'}/>
      <PageBody delay={2}/>
    </div>
  )
}

export default Home;


