import { FC, ReactNode } from 'react'

interface ILayoutProps {
  children: ReactNode
}

const Layout: FC<ILayoutProps> = ({children}) => {
  return (
    <>
      <header>
        <span>Logo</span>
      </header>

      <main>
        {children}
      </main>
      
      <footer>
        2023
      </footer>
    </>
  )
}

export default Layout