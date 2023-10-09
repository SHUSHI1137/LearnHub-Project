import { useParams } from 'react-router-dom'
import useContent from '../hooks/useContent'
import classes from './ContentDetail.module.css'
import ReactPlayer from 'react-player'

const ContentDetail = () => {
  const { id } = useParams()
  const { content, isLoading, error } = useContent(id || '1')

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error}</p>

  return (
    <div className={classes.container}>
      {content && (
        <>
          <div>
            <h1>{content.videoTitle}</h1>
            <h5>{content.creatorName}</h5>
          </div>
          <div>
            <ReactPlayer url={content.videoUrl} />
          </div>
          <div>
            <p>{content.comment}</p>
            <div>
              <p>{content.rating}</p>
              <p>{content.postedBy.username}</p>
              <p>{content.createdAt}</p>
              <p>{content.updatedAt}</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ContentDetail
