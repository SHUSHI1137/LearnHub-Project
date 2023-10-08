import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <nav className="App">
      <Navbar />
      <div>
        <Home />
      </div>
    </nav>
  )
}

export default App
