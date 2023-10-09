import { useParams } from 'react-router-dom'
import useContent from '../hooks/useContent'
import classes from './ContentDetail.module.css'

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
          {/* <iframe
            width="560"
            height="315"
            src={content.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
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
