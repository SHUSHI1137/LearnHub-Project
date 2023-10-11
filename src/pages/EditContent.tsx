import { FormEvent, useState } from 'react'
import updateContent from '../hooks/useContent'
import { useNavigate, useParams } from 'react-router-dom'
import classes from '../pages/EditContent.module.css'
import Button from '@mui/joy/Button'
import ReactStars from 'react-stars'
import useContent from '../hooks/useContent'

const EditContent = () => {
  const { id } = useParams()
  const { isLoading, isSubmitting, editContent } = updateContent(id || '1')
  const { content } = useContent(id || '1')
  const [editComment, setEditComment] = useState<string>('')
  const [editRating, setEditRating] = useState<number>(0)
  const navigate = useNavigate()

  const handleRating = (rating: number) => {
    setEditRating(rating)
    console.log(rating)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await editContent(editComment, editRating)

      navigate('/')
      console.log(handleSubmit)
    } catch (err) {
      console.error(err)
    }
  }

  if (isLoading) return <h1>Loading....</h1>

  return (
    <div className={classes.container}>
      <form className={classes.contentForm} onSubmit={handleSubmit}>
        <h2>Edit Content</h2>
        <label>Comment (280 characters maximum)</label>
        <input type="text" value={content?.comment} onChange={(e) => setEditComment(e.target.value)} required />
        <label>Rating</label>
        <ReactStars
          count={5}
          onChange={handleRating}
          value={content?.rating}
          size={24}
          color2={'#ffd700'}
          half={false}
        />
        <Button type="submit" variant="solid" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  )
}

export default EditContent
