export interface iUserData {
  login: string, 
  password: string, 
  level: number
}

export interface iTokenPayload {
  user: string,
  userId: string,
  userLevel: number 
}

export interface iEditRow {
  title: string,
  content: string | number, 
  name: string,
  type: string,
  readonly: boolean,
  onSave: Function
}

export interface iUserInfoRow {
  title: string,
  content: string | number,
  name: string,
  type?: string,
  readonly?: boolean
}

export interface iPostCard {
  _id: string,
  title: string,
  content: string,
  date: string,
  authorId: string,
  authorInfo?: {
    name?: string,
    role?: string,
    photo?: string
  }
}

export interface iUserInfo {
  _id: string,
  login: string,
  name: string,
  role: string,
  level: number,
  photo: string
}
