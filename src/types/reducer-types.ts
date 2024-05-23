export interface UserStateInterface {
  _id: string;
  username: string;
  image: string | File | null;
  role: string;
  email: string;
  password: string;
  gender: string;
  dob: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserReducerInitialState {
  user: UserStateInterface | null;
  loading: boolean;
}
