import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import UpperBanner from '../components/upperBanner/upperBanner.js';


const Home = () => {
  return (
    <div className={styles.main}>
      <UpperBanner/>
    </div>
  )
}

export default Home;


