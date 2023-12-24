export interface iUserInfo {
  _id: string,
  login: string,
  name: string,
  role: string,
  level: number,
  photo: string
}

// USER API RESPONSES

export interface iUserApi {
  message: string,
}

export interface iGetUserResponse extends iUserApi {
  user?: iUserInfo
}

export interface iUpdateUserResponse extends iUserApi {
  updatedUser?: iUserInfo
}
