export interface ContentDTO {
  id: number
  videoTitle: string
  videoUrl: string
  comment: string
  rating: number
  thumbnailUrl: string
  creatorName: string
  creatorUrl: string
  createdAt: string
  updatedAt: string
  postedBy: {
    id: number
    username: string
    name: string
    registeredAt: string
  }
}

export interface CreatePostDTO {
  videoUrl: string
  comment: string
  rating: number
}

export interface LoginDTO {
  username: string
  password: string
}

export interface CredentialDTO {
  accessToken: string
}

export interface RegisterDTO {
  username: string
  name: string
  password: string
}
