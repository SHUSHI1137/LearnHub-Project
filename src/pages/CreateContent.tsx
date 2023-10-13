import { useNavigate } from 'react-router-dom'
import useContents from '../hooks/useContents'
import { FormEvent, useState } from 'react'
import ReactStars from 'react-stars'

const CreateContent = () => {
  const { isLoading, isSubmitting, createContent } = useContents()
  const navigate = useNavigate()
  const [newVideoUrl, setNewVideoUrl] = useState<string>('')
  const [newComment, setNewComment] = useState<string>('')
  const [newRating, setNewRating] = useState<number>(0)

  const handleRating = (rating: number) => {
    setNewRating(rating)
    console.log(rating)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createContent(newVideoUrl, newComment, newRating)

      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }
  console.log(handleSubmit)

  if (isLoading) return <h1>Loading.....</h1>

  return (
    <div className="block box-border">
      <div className="flex flex-col items-center justify-center box-border m-12">
        <p className="text-4xl font-extrabold text-orange-600">Create new content</p>
        <form className="flex flex-col gap-6 m-8" onSubmit={handleSubmit}>
          <div className="flex flex-col font-serif font-bold text-neutral-500 gap-2 min-w-380">
            <label>Video URL</label>
            <input
              type="url"
              className="border-2 w-80 rounded-md placeholder:italic placeholder:text-slate-400block bg-white border-slate-300 py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Please input Video URL"
              value={newVideoUrl}
              onChange={(e) => setNewVideoUrl(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col font-serif font-bold text-neutral-500 gap-2 min-w-380">
            <label>Comment (280 Characters Maximum)</label>
            <input
              type="text"
              className="border-2 w-80 rounded-md placeholder:italic placeholder:text-slate-400block bg-white border-slate-300 py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Please input Comment"
              maxLength={280}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-row justify-center items-center font-serif font-bold text-neutral-500 gap-2 min-w-380">
            <label>Rating</label>
            <ReactStars count={5} onChange={handleRating} value={newRating} size={48} color2={'#ffd700'} half={false} />
          </div>
          <div className="flex flex-col gap-2.5 min-w-380 ">
            <button
              type="submit"
              className="border-none bg-blue-500 hover:bf-blue-600 text-white rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateContent
