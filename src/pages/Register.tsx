import { useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { FormEvent, useState } from 'react'
import classes from './Register.module.css'

const Register = () => {
  const { createUser } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createUser(username, name, password)
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form className={classes.registerForm} onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />

      <label>Name:</label>
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <label>Password:</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />

      <input type="submit" value="Register"></input>
    </form>
  )
}

export default Register
