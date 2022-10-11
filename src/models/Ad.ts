import { Comment } from './Comment'

export interface Ad {
  id: number
  name: string
  description: string
  ingredients: string
  image_id?: number
  value: number
  createdAt: string
  updatedAt: string
  user_id: number
  user: {
    name: string
  }
  image?: {
    url: string
    path: string
  }
  comments: Comment[]
}
