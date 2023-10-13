import useContents from '../hooks/useContents'
import Content from '../components/Content'
import { useAuth } from '../providers/AuthProvider'
import { NavLink } from 'react-router-dom'
import Button from '@mui/joy/Button'

const Home = () => {
  const { contents, isLoading } = useContents()
  const { isLoggedIn } = useAuth()

  if (isLoading) return <h1>Loading...</h1>

  console.log(contents)
  return (
    <>
      <section
        className="flex text-left flex-col	gap-2 py-6	px-8 bg-gradient-to-r w-full from-blue-800 to-blue-500 underline-offset-4
"
      >
        <h1 className="subpixel-antialiased hover:italic text-5xl font-black	w-fit text-orange-500 underline decoration-pink-500">
          LearnHub
        </h1>
        <h2 className="antialiased text-stone-50/70 text-xl		">Hub for Educational Videos</h2>
      </section>
      <div>
        {isLoggedIn ? (
          <>
            <div className="flex justify-end	my-8 mx-20 ">
              <NavLink to="/create">
                <Button color="success" size="lg" variant="solid">
                  Create Content
                </Button>
              </NavLink>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="grid grid-cols-4 my-6 mx-8 justify-items-stretch	items-stretch gap-8	">
        {contents &&
          contents.data.map((content) => {
            return <Content key={content.id} contents={content} />
          })}
      </div>
    </>
  )
}

export default Home
