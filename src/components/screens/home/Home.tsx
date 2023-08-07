import { FC, useState } from 'react'
import { Inter } from 'next/font/google'
import Layout from '../../layout/Layout'

const inter = Inter({ subsets: ['latin'] })

const Home: FC = () => {
  const [state, setState] = useState<number>(0)
  const increment = () => setState(prev => prev + 1)

  return (
    <Layout>
      <h2 data-testid="title-docs">
        Docs <span>-&gt;</span>
      </h2>
      <p>Test CI/CD</p>
      <div>
        <h3>Value = {state}</h3>
        <button onClick={increment}>
          Increment
        </button>
      </div>
    </Layout>
  )
}

export default Home