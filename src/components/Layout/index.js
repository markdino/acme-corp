import { createGlobalStyle } from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'

const GlobalStyle = createGlobalStyle`
    .container {
    max-width: 1000px !important;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
