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

export interface iUserInfoList {
  rows: Array<iUserInfoRow>,
  userId: string
}
