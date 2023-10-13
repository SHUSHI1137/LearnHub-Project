import { FormEvent, useEffect, useState } from 'react'
import updateContent from '../hooks/useContent'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '@mui/joy/Button'
import ReactStars from 'react-stars'
import useContent from '../hooks/useContent'

const EditContent = () => {
  const { id } = useParams()
  const { isLoading, isSubmitting, editContent } = updateContent(id || '1')
  const { content, error } = useContent(id || '1')
  const [editComment, setEditComment] = useState<string>('')
  const [editRating, setEditRating] = useState<number>(0)
  const navigate = useNavigate()

  useEffect(() => {
    if (content) {
      setEditComment(content.comment)
      setEditRating(content.rating)
    }
  }, [content])

  const handleRating = (rating: number) => {
    setEditRating(rating)
    console.log(rating)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await editContent(editComment, editRating)

      navigate(`/content/${id}`)
      console.log(handleSubmit)
    } catch (err) {
      console.error(err)
    }
  }

  if (isLoading) return <h1>Loading....</h1>
  if (error || !content) return <p className="text-center text-red-500">{error}</p>

  return (
    <div className="block box-border">
      <div className="flex flex-col items-center justify-center box-border m-12">
        <p className="text-4xl font-extrabold text-orange-600">Edit Content</p>
        <form className="flex flex-col gap-6 m-8" onSubmit={handleSubmit}>
          <div className="flex flex-col font-serif font-bold text-neutral-500 gap-2 min-w-380">
            <label>Comment (280 Characters Maximum)</label>
            <input
              type="text"
              className="border-2 w-80 rounded-md placeholder:italic placeholder:text-slate-400block bg-white border-slate-300 py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Please input Comment"
              value={editComment}
              onChange={(e) => setEditComment(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center font-serif font-bold text-neutral-500 gap-2 min-w-380">
            <label>Rating</label>
            <ReactStars
              count={5}
              onChange={handleRating}
              value={content.rating}
              size={48}
              color2={'#ffd700'}
              half={false}
            />
          </div>
          <Button type="submit" variant="solid" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default EditContent
