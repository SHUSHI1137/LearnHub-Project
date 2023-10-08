import { ContentDTO } from '../types/dto'

interface IContentsProps {
  contents: ContentDTO
}

const Content = ({ contents }: IContentsProps) => {
  return (
    <div>
      <p>id: {contents.id}</p>
      <p>title: {contents.videoTitle}</p>
      <p>url: {contents.videoUrl}</p>
      <p>comment: {contents.comment}</p>
    </div>
  )
}

export default Content
