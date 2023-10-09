import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import classes from './Navbar.module.css'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <nav className={classes.nav}>
      <div className={classes.menu}>
        <p>Logo</p>
      </div>
      <div className={classes.menu}>
        <p>Register</p>
        {isLoggedIn ? (
          <>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/create">
              Create
            </NavLink>
            <Link to="/" className={classes.login} onClick={logout}>
              Log out
            </Link>
          </>
        ) : (
          <Link to="/login" className={classes.login}>
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
