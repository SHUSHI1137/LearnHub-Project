import { Link } from 'react-router-dom'
import { ContentDTO } from '../types/dto'
import ReactStars from 'react-stars'

interface IContentsProps {
  contents: ContentDTO
}

const Content = ({ contents }: IContentsProps) => {
  return (
    <a className="flex flex-col rounded-xl">
      {/* <div className="flex flex-col rounded-xl"> */}
      <Link to={`/content/${contents.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <img src={contents.thumbnailUrl} className="w-full aspect-video object-cover rounded-xl	"></img>
        <div className="flex flex-col justify-between	max-h-full gap-4 m-4">
          <div className="flex flex-col gap-1.5 italic font-extrabold	">
            <p>{contents.videoTitle}</p>
          </div>
          <div className="font-medium">
            <h5>{contents.comment}</h5>
          </div>
          <div className="flex  justify-between gap-2">
            <p>{contents.postedBy.username}</p>
            <ReactStars count={5} value={contents.rating} size={24} color2={'#ffd700'} edit={false} />
          </div>
        </div>
      </Link>
      {/* </div> */}
    </a>
  )
}

export default Content
