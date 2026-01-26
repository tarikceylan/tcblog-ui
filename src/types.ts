import { BlogSchema, LoginSchema } from '@/lib/validations';
import * as z from 'zod';

export interface IBlog {
  _id: string;
  title: string;
  body: string;
  author: string;
  tags: string[];
  updatedAt: Date;
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

export type ActionState = {
  error?: string;
} | null;

export type BlogSchemaType = z.infer<typeof BlogSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
