import { useParams, Link, NavLink } from 'react-router-dom'
import useContent from '../hooks/useContent'
import classes from './ContentDetail.module.css'
import ReactPlayer from 'react-player'
import ReactStars from 'react-stars'

const ContentDetail = () => {
  const { id } = useParams()
  const { content, isLoading, error, deleteContent } = useContent(id || '1')

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error}</p>

  return (
    <main className="block m-0 p-0">
      <div>
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
                <ReactStars count={5} value={content.rating} size={24} color2={'#ffd700'} half={false} edit={false} />
                <p>{content.postedBy.username}</p>
                <p>{content.createdAt}</p>
                {content.updatedAt !== content.createdAt ? <p>{content.updatedAt}</p> : <></>}
              </div>
              <div>
                {localStorage.getItem('username') === content.postedBy.username ? (
                  <>
                    <NavLink
                      className={({ isActive }) => (isActive ? classes.active : classes.inactive)}
                      to={`/content/${id}/edit`}
                    >
                      Edit{' '}
                    </NavLink>
                  </>
                ) : (
                  <Link to="/login" className={classes.login}></Link>
                )}
                <div>
                  {localStorage.getItem('username') === content.postedBy.username ? (
                    <div>{<button onClick={deleteContent}>Delete</button>}</div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default ContentDetail
