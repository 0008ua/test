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
export interface ProductFormState {
  parent: string;
  _id: string;
  name: string;
  picture: string;
  display: boolean;
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

export const initialStateForm: ProductFormState = {
  parent: 'products',
  _id: '',
  name: '',
  picture: 'environment.defaults.productPicture',
  display: true,
};

export const stateForm: ProductFormState = {
  parent: 'products',
  _id: '',
  name: '',
  picture: 'productPicture',
  display: true,
};

export const initialState: UserState = { user: new User(null, 'Guest') };


// console.log('->', 
//   {
//     ...initialState,
//     user: { ...action.payload.user, loading: false },
//   }
// );


console.log('->', { ...stateForm, picture: initialStateForm.picture });

