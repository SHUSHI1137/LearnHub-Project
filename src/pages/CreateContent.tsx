import { useNavigate } from 'react-router-dom'
import useContents from '../hooks/useContents'
import { FormEvent, useState } from 'react'
import classes from '../pages/CreateContent.module.css'

const CreateContent = () => {
  const { isLoading, isSubmitting, createContent } = useContents()
  const navigate = useNavigate()
  const [newVideoUrl, setNewVideoUrl] = useState<string>('')
  const [newComment, setNewComment] = useState<string>('')
  const [newRating, setNewRating] = useState<number>(0)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createContent(newVideoUrl, newComment, newRating)

      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

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
        <input type="number" value={newRating} onChange={(e) => setNewRating(Number(e.target.value))} required />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default CreateContent
