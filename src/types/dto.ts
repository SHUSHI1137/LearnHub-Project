//* Old ContentDTO
// export interface ContentDTO {
//   id: number
//   videoTitle: string
//   videoUrl: string
//   comment: string
//   rating: number
//   thumbnailUrl: string
//   creatorName: string
//   creatorUrl: string
//   createdAt: string
//   updatedAt: string
//   postedBy: {
//     id: number
//     username: string
//     name: string
//     registeredAt: string
//   }
// }

export interface ContentDTO {
  id: number
  videoTitle: string
  videoUrl: string
  comment: string
  rating: number
  thumbnaiUrl: string
  creatorName: string
  creatorUrl: string
  User: {
    id: number
    username: string
    name: string
    registeredAt: string
  }
  createdAt: Date
  updatedAt: Date
}

export type ContentsDTO = ContentDTO[]

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

export interface UpdateContentDTO {
  comment: string
  rating: number
}
