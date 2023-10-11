import useContents from '../hooks/useContents'
import Content from '../components/Content'
import { useAuth } from '../providers/AuthProvider'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const { contents, isLoading } = useContents()
  const { isLoggedIn } = useAuth()

  if (isLoading) return <h1>Loading...</h1>

  console.log(contents)
  return (
    <>
      <section>
        <h1>LearnHubJa</h1>
        <h2>Hub for Educational Videos</h2>
      </section>
      <div>
        <h2 className="font-bold text-5xl">Content</h2>
      </div>
      <div>
        {isLoggedIn ? (
          <>
            <NavLink to="/create">Create</NavLink>
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
