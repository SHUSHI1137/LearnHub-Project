import { useParams, Link, NavLink } from 'react-router-dom'
import useContent from '../hooks/useContent'
import classes from './ContentDetail.module.css'
import ReactPlayer from 'react-player'
import ReactStars from 'react-stars'
import moment from 'moment'

const ContentDetail = () => {
  const { id } = useParams()
  const { content, isLoading, error, deleteContent } = useContent(id || '1')

  if (isLoading) return <h1>Loading...</h1>
  if (error || !content) return <p className="text-center text-red-500">{error}</p>

  return (
    <main className=" block box-border">
      <div className="block box-border m-8 p-0 w-3/5 mx-auto max-w-screen-xl items-center justify-center ">
        <div className="flex flex-col box-border gap-6 bg-gradient-to-r from-blue-800 to-blue-500 rounded-md p-8 items-center justify-center">
          {content && (
            <>
              <div className="flex flex-col items-center text-center gap-3 padding">
                <a className="text-3xl font-bold text-orange-600 text-ellipsis hyphens-manual" href={content.videoUrl}>
                  {content.videoTitle}
                </a>
                <a className="block text-xl font-medium font-serif text-neutral-300" href={content.videoUrl}>
                  {content.creatorName}
                </a>
              </div>
              <div className="flex flex-col w-fit h-full">
                <ReactPlayer url={content.videoUrl} />
              </div>
              <div className="flex flex-col font-serif relative px-10 py-3 w-full rounded-lg gap-3 bg-neutral-100 leading-6 text-neutral-600">
                <p className="font-mono text-xl font-semibold">{content.comment}</p>
                <div className="flex flex-col items-end gap-1.5 text-right text-lg">
                  <ReactStars count={5} value={content.rating} size={24} color2={'#ffd700'} half={false} edit={false} />
                  <p>By - {content.postedBy.username}</p>
                  <p>{moment(content.createdAt).format('ddd MMM Do YY')}</p>
                  {content.updatedAt !== content.createdAt ? (
                    <p>(Update On: {moment(content.createdAt).format('ddd MMM Do YY')})</p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex flex-row justify-end items-center font-sans text-right text-sm gap-5 mt-1 font-extrabold	text-orange-600  underline decoration2-pink-500 underline-offset-4">
                  {localStorage.getItem('username') === content.postedBy.username ? (
                    <NavLink
                      className={({ isActive }) => (isActive ? classes.active : classes.inactive)}
                      to={`/content/${id}/edit`}
                    >
                      Edit{' '}
                    </NavLink>
                  ) : (
                    <Link to="/login" className={classes.login}></Link>
                  )}
                  {localStorage.getItem('username') === content.postedBy.username ? (
                    <>{<button onClick={deleteContent}>Delete</button>}</>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

export default ContentDetail
