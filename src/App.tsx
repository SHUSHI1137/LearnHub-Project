import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CreateContent from './pages/CreateContent'
import Home from './pages/Home'
import { useAuth } from './providers/AuthProvider'
import GuardedRoute from './guard/GuardedRoute'
import Login from './pages/Login'
import ContentDetail from './pages/ContentDetail'
import EditContent from './pages/EditContent'
import Register from './pages/Register'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content/:id" element={<ContentDetail />} />

        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
          <Route path="/create" element={<CreateContent />} />
          <Route path="/content/:id/edit" element={<EditContent />} />
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
