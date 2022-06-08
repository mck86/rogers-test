export interface UsersPageInterface {
  page: number
  per_page?: number
  total?: number
  total_pages?: number
  data?: UsersPageDataInterface[]
  support?: Support
}

export interface UsersPageDataInterface {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface Support {
  url: string
  text: string
}
