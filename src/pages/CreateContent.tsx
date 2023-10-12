import { useNavigate } from 'react-router-dom'
import useContents from '../hooks/useContents'
import { FormEvent, useState } from 'react'
import classes from '../pages/CreateContent.module.css'
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
    <div className={classes.container}>
      <form className={classes.contentForm} onSubmit={handleSubmit}>
        <h2>Create new content</h2>
        <label>Video URL</label>
        <input type="text" value={newVideoUrl} onChange={(e) => setNewVideoUrl(e.target.value)} required />
        <label>Body</label>
        <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} required />
        <label>Rating</label>
        <ReactStars count={5} onChange={handleRating} value={newRating} size={24} color2={'#ffd700'} half={false} />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default CreateContent
