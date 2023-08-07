import { FC } from 'react'
import { Inter } from 'next/font/google'
import Layout from '../../layout/Layout'

const inter = Inter({ subsets: ['latin'] })

const Home: FC = () => {
  return (
    <Layout>
      <h2 data-testid="title-docs">
        Docs <span>-&gt;</span>
      </h2>
      <p>Test CI/CD</p>
    </Layout>
  )
}

export default Home