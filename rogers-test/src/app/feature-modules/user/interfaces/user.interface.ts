export interface UserInterface {
  data: UserDataInterface
  support?: Support
}

export interface UserDataInterface {
  id: number
  email?: string
  first_name?: string
  last_name?: string
  avatar?: string
}

export interface Support {
  url: string
  text: string
}
