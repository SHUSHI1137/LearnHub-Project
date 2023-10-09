import { useEffect, useState } from 'react'
import { ContentsDTO, CreatePostDTO } from '../types/dto'
import axios from 'axios'

const useContents = () => {
  const [contents, setContents] = useState<ContentsDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<ContentsDTO>('https://api.learnhub.thanayut.in.th/content')

        console.log(res.data)
        setContents(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const createContent = async (setNewVideoUrl: string, setNewComment: string, setNewRating: number) => {
    const token = localStorage.getItem('token')
    const newContentBody: CreatePostDTO = {
      videoUrl: setNewVideoUrl,
      comment: setNewComment,
      rating: setNewRating,
    }

    setIsSubmitting(true)
    try {
      const res = await axios.post<CreatePostDTO>('https://api.learnhub.thanayut.in.th/content', newContentBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      console.log(res.data)
    } catch (err) {
      throw new Error('Cannot create content')
    } finally {
      setIsSubmitting(false)
    }
  }

  return { contents, isLoading, isSubmitting, createContent }
}

export default useContents
