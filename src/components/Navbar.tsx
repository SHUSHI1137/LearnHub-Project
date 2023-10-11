import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import classes from './Navbar.module.css'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <nav className={classes.nav}>
      <div>
        <Link to="/">
          <img src="/src/assets/logo.svg"></img>
          <span>LearnHub</span>
        </Link>
      </div>
      <div className={classes.menu}>
        {isLoggedIn ? (
          <>
            <Link to="/" className={classes.login} onClick={logout}>
              Log out
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
