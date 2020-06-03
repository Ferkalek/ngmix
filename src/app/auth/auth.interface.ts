export interface IAuthReqDTO {
  email: string;
  password: string;
}

export interface IAuthResDTO {
  id: number;
  token: string;
}

export interface ILoginToken {
  token: string;
}
