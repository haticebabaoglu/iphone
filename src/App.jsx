import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'

function App() {
  
  return (
    <main className='bg-black' >
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model />
    </main>
  )
}

export default App
