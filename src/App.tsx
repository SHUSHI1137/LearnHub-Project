import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CreateContent from './pages/CreateContent'
import Home from './pages/Home'
import { useAuth } from './providers/AuthProvider'
import GuardedRoute from './guard/GuardedRoute'
import Login from './pages/Login'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
          <Route path="/create" element={<CreateContent />} />
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
