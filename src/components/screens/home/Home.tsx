import { FC } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const Home: FC = () => {
  return (
    <>
      <h2 data-testid="title-docs">
        Docs <span>-&gt;</span>
      </h2>
    </>
  )
}

export default Home