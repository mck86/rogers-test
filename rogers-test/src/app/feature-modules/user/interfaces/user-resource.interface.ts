export interface UserResourceInterface {
  data: UserResourceDataInterface
  support: Support
}

export interface UserResourceDataInterface {
  id: number
  name?: string
  year?: number
  color?: string
  pantone_value?: string
}

export interface Support {
  url: string
  text: string
}
