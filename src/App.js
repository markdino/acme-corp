import Layout from './components/Layout'
import Hero from './components/Hero'
import Insights from './components/Insights'
import ContactUs from './components/ContactUs'
import UpcomingEvents from './components/UpcomingEvents'

function App() {
  return (
    <div className='App'>
      <Layout>
        <Hero />
        <Insights />
        <ContactUs />
        <UpcomingEvents />
      </Layout>
    </div>
  )
}

export default App
