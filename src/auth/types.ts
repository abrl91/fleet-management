import { User } from '../schemes/user.schema';

export type UserWithoutPassword = Omit<User, 'password'>;

export type RequestUser = {
  user: {
    _doc: UserWithoutPassword & { _id: string };
  } & Record<string, unknown>;
};

export type RequestWithUser = Record<string, unknown> & RequestUser;
