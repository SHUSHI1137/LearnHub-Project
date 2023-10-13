import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import classes from './Navbar.module.css'
import Button from '@mui/joy/Button'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <nav className="flex w-full	h-full justify-between bg-gradient-to-r from-blue-800 to-blue-500	items-center py-5 px-4	mx--8">
      <div>
        <Link to="/" className="flex flex-initial	items-center text-2xl ">
          <img src="/src/assets/logo.svg" className="w-12 h-12"></img>
          <span className="font-extrabold	text-orange-500	">LearnHub</span>
        </Link>
      </div>
      <div className={classes.menu}>
        {isLoggedIn ? (
          <>
            <Link to="/" onClick={logout}>
              <Button className="#C41C1C">Log out</Button>
            </Link>
          </>
        ) : (
          <>
            <button className="flex flex-row gap-3.5 w-28 h-8 border-spacing-2 bg-orange-500 hover:bg-orange-600 text-white font-mono items-center justify-center ">
              <Link to="/register">Register</Link>
            </button>
            <button className="flex flex-row gap-3.5 w-20 h-8 border-spacing-2 bg-orange-500 hover:bg-orange-600 text-white font-mono items-center	justify-center">
              <Link to="/login">Login</Link>
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
