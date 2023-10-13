import { useEffect, useState } from 'react'
import { ContentsDTO, CreatePostDTO } from '../types/dto'
import axios, { AxiosError } from 'axios'

const useContents = () => {
  const [contents, setContents] = useState<ContentsDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<ContentsDTO>('https://api.learnhub.thanayut.in.th/content')

        console.log(res.data)
        setContents(res.data)
      } catch (err) {
        if (err instanceof AxiosError) setError(err.response?.data.message)
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
      if (err instanceof AxiosError) throw new Error(err.response?.data.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { contents, isLoading, isSubmitting, error, createContent }
}

export default useContents
