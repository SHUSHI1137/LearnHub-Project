import useContents from '../hooks/useContents'
import Content from '../components/Content'
import classes from '../pages/Home.module.css'

const Home = () => {
  const { contents, isLoading } = useContents()

  if (isLoading) return <h1>Loading...</h1>

  console.log(contents)
  return (
    <div className={classes.container}>
      <div className={classes.feedContainer}>
        <h2>Content</h2>
        {contents &&
          contents.data.map((content) => {
            return <Content key={content.id} contents={content} />
          })}
      </div>
    </div>
  )
}

export default Home
