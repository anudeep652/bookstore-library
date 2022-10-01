export interface loginType {
  email: string | null;
  password: string | null;
}

export interface registerType extends loginType {
  username: string | null;
  confirmPassword: string;
}

export interface localStorageUser
  extends Pick<registerType, "username" | "email"> {
  token: string | null;
  boughtBooks: string[];
  rentedBooks: string[];
}

export interface initialStateType
  extends Omit<registerType, "confirmPassword" | "password"> {
  isError: boolean;
  isSuccess: boolean;
  message: string;
  isLoggedIn: boolean;
  token: string | null;
}

export interface initialStateUser
  extends Pick<initialStateType, "username" | "email"> {
  boughtBooks: string[];
  rentedBooks: string[];
}
export interface reviews {
  date: string;
  message: string;
  reviewer: string;
  stars: number;
  subject: string;
}
export interface bookItems {
  name: string;
  author: string;
  payAmount: number;
  rentAmount: number;
  imageUrl: string;
  stars?: number;
  reviews?: reviews[];
  description: string;
}

export interface book {
  books: bookItems[];
}

export enum caseEnum {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}
