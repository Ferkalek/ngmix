export interface IAuthReq {
  email: string;
  password: string;
}

export interface IAuthRes {
  id: number;
  token: string;
}

export interface ILoginToken {
  token: string;
}