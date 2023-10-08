import useContents from '../hooks/useContents'
import Content from '../components/Content'

const Home = () => {
  const { contents, isLoading } = useContents()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="row-auto">
      <h2>Content</h2>
      {contents &&
        contents.map((content) => {
          return <Content key={content.id} contents={content} />
        })}
    </div>
  )
}

export default Home
