import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { FormEvent, useState } from 'react'

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
    <main className="block box-border justify-item-center">
      <div className="flex flex-col items-center	justify-items-center box-border m-12	">
        <p className="text-4xl font-extrabold text-orange-600	">Register</p>
        <form className="flex flex-col gap-6 m-8 " onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2	min-w-380">
            <label>Username</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              className="border-2 w-80 rounded-md placeholder:italic placeholder:text-slate-400block bg-white  border-slate-300 py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Please input username"
            />
          </div>

          <div className="flex flex-col gap-2	min-w-380">
            <label>Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="border-2 w-80 rounded-md placeholder:italic placeholder:text-slate-400block bg-white  border-slate-300 py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Please input name"
            />
          </div>

          <div className="flex flex-col gap-2	min-w-380">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 w-80 rounded-md placeholder:italic placeholder:text-slate-400block bg-white  border-slate-300 py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Please input password"
            />
          </div>

          <div className="flex flex-col gap-2.5 min-w-380	">
            <button
              type="submit"
              value="Register"
              className="border-none bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            >
              Register
            </button>
          </div>
          <div className="flex flex-initial	items-center align-item text-center justify-center ">
            <Link to="/login">
              <p className="font-extrabold	text-stone-500/50	">Already have an account? Login</p>
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Register
