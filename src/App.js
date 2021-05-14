import Layout from './components/Layout'
import Hero from './components/Hero'
import Insights from './components/Insights'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <div className='App'>
      <Layout>
        <Hero />
        <Insights />
        <ContactUs />
      </Layout>
    </div>
  )
}

export default App
