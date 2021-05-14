import { createGlobalStyle } from 'styled-components'
import Header from '../Header'

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
    </>
  )
}
export default Layout
