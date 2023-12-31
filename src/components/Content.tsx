import { Link } from 'react-router-dom'
import { ContentDTO } from '../types/dto'
import ReactStars from 'react-stars'

interface IContentsProps {
  contents: ContentDTO
}

const Content = ({ contents }: IContentsProps) => {
  return (
    <a className="flex flex-col rounded-xl bg-stone-100">
      <Link to={`/content/${contents.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <img src={contents.thumbnaiUrl} className="w-full aspect-video object-cover rounded-t-lg	"></img>
        <div className="flex flex-col justify-between	max-h-full m-4">
          <div className="flex flex-col italic font-extrabold text-ellipsis">
            <p>{contents.videoTitle}</p>
          </div>
          <div className="flex flex-col italic gap-3 mt-1 text-sm text-neutral-600">
            <p>{contents.creatorName}</p>
          </div>
          <div className="flex flex-col h-full font-medium gap-4 mt-5">
            <h5>{contents.comment}</h5>
          </div>
          <div className="flex justify-between items-center mt-1">
            <p>{contents.User.username}</p>
            <ReactStars count={5} value={contents.rating} size={24} color2={'#ffd700'} edit={false} />
          </div>
        </div>
      </Link>
    </a>
  )
}

export default Content
