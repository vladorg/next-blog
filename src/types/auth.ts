export interface iAuthApi {
  message: string,
}

export interface iUserData {
  login: string, 
  password: string, 
  level: number
}


// AUTH API RESPONSES

export interface iRegisterResponse extends iAuthApi {
  newUser?: iUserData
}

export interface iSigninResponse extends iAuthApi {
  token?: string,
  user?: string
}
