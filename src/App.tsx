import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { Home } from './pages/home/home'

function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
      </main>

      <Footer />
    </>
  )
}

export default App