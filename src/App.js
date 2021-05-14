import Layout from './components/Layout'
import Hero from './components/Hero'
import Insights from './components/Insights'

function App() {
  return (
    <div className='App'>
      <Layout>
        <Hero />
        <Insights />
      </Layout>
    </div>
  )
}

export default App
