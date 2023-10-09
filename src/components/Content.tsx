import { Link } from 'react-router-dom'
import { ContentDTO } from '../types/dto'

interface IContentsProps {
  contents: ContentDTO
}

const Content = ({ contents }: IContentsProps) => {
  return (
    <div>
      <Link to={`/content/${contents.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <a>
          <img src={contents.thumbnailUrl}></img>
          <div>
            <p>title: {contents.videoTitle}</p>
            <h5>{contents.comment}</h5>
          </div>
          <div>
            <p>{contents.postedBy.username}</p>
          </div>
          <div>
            <p>{contents.rating}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Content
