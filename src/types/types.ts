export interface User {
  username: string;
  email: string;
  image: File | string | null;
  gender: string;
  role: string;
  dob: string;
  _id: string;
  password: string;
}

export interface UserLoginBodyInterface {
  username: string;
  password: string;
}

export interface UserUpdateBodyInterface {
  _id: string;
  username: string;
  image: string | File | null;
  email: string;
  password: string;
  gender: string;
  dob: Date;
}
