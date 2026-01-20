export interface IBlog {
  _id: string;
  title: string;
  body: string;
  author: string;
  tags: string[];
}

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password?: string;
  roles: string[];
}

export interface IAuthContext {
  user: IUser | null;
}

export type IActionState = {
  error?: string;
} | null;
