export interface IUser {
  uid: string | null;
  email?: string;
  photoURL?: string;
  displayName: string;
  myCustomData?: string;
  emailVerified?: boolean;
  loading?: boolean;
  error?: string;
}

export class User implements IUser {
  constructor(public uid: string | null, public displayName: string) { }
}

export interface UserState {
  user: IUser;
}

const action = {
  payload: {
    user: {
      uid: 'adfgadfgadfadfh',
      displayName: 'john',
      email: 'ff@sdfsd.com'
    }
  }
}

export const initialState: UserState = { user: new User(null, 'Guest') };


console.log('->', 
  {
    ...initialState,
    user: { ...action.payload.user, loading: false },
  }
);
