import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import classes from './Navbar.module.css'
import Button from '@mui/joy/Button'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <nav className={classes.nav}>
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
            <Link to="/register" className={classes.register}>
              Register
            </Link>

            <Link to="/login" className={classes.login}>
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
