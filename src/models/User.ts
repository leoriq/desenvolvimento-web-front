export interface User {
  id?: number
  name: string
  password?: string
  password_hash?: string
  master?: boolean
  createdAt: string
  updatedAt: string
  token?: string
}
