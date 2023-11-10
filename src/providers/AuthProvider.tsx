import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CredentialDTO, LoginDTO, RegisterDTO } from '../types/dto'
import axios, { AxiosError } from 'axios'

interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContextType {
  isLoggedIn: boolean
  username: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  createUser: (username: string, name: string, password: string) => Promise<void>
}

const AuthContext = createContext<IAuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within AuthProvider')

  return context
}

const token = localStorage.getItem('token')
const user = localStorage.getItem('username')

const checkLoginStatus = async (token: string | null): Promise<boolean> => {
  if (typeof token !== 'string') return false
  try {
    const currentUserResponse = await axios.get('http://localhost:8080/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (currentUserResponse.status === 200) return true
  } catch (err) {
    if (err instanceof AxiosError && err.response?.status === 403) {
      return false
    }

    throw err
  }
  return false
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token)
  const [username, setUsername] = useState<string | null>(user)
  const navigate = useNavigate()

  useEffect(() => {
    checkLoginStatus(token).then((isLoggedInAlready) => {
      setIsLoggedIn(isLoggedInAlready)
    })
  }, [])

  const login = async (username: string, password: string) => {
    const loginBody: LoginDTO = { username, password }

    try {
      const res = await axios.post<CredentialDTO>('http://localhost:8080/auth/login', loginBody, {
        headers: { 'Content-Type': 'application/json' },
      })

      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('username', username)
      setIsLoggedIn(true)
      setUsername(username)
    } catch (err) {
      throw new Error('Invalid username or password')
    }
  }

  const logout = () => {
    localStorage.clear()
    setIsLoggedIn(false)
    setUsername(null)
    navigate('/')
  }

  const createUser = async (username: string, name: string, password: string) => {
    const createUserBody: RegisterDTO = { username, name, password }

    try {
      const res = await axios.post('http://localhost:8080/user', createUserBody)

      console.log(res)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, username, logout, createUser }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
