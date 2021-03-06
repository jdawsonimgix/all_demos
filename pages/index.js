import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'

const DynamicHeader = dynamic(() => import('../components/TheVideo'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className={styles.container}>
      <TheHeader />
      <DynamicHeader />
      <TheFooter />
    </div>
  )
}
//https://javascript.plainenglish.io/next-js-client-side-rendering-56a3cae65148
/*
  <div className={styles.container}>
      <DynamicHeader theSource="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4" />
    </div>
*/
