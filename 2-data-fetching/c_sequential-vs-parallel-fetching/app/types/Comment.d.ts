export interface CommentsResponse {
  comments: Comment[]
  total: number
  skip: number
  limit: number
}

export interface Comment {
  id: number
  body: string
  postId: number
  user: User
}

export interface User {
  id: number
  username: string
}
