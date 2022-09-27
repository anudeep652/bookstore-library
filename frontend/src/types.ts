export interface loginType {
    email:string | null,
    password:string | null
}

export interface registerType extends loginType{
    username:string | null
    confirmPassword:string
}

export interface localStorageUser extends Pick<registerType,'username' | 'email'>  {
    token:string | null
}

export interface initialStateType extends Omit<registerType,'confirmPassword'| 'password'>{
    isError:boolean,
    isSuccess:boolean
    message:string,
    isLoggedIn:boolean
}


export interface reviews {
    reviewer:string,
    reviewMessage:string,
    date:Date,
    stars:number
} 
export interface bookItems {
    name:string,
    author:string,
    payAmount:number,
    rentAmount:number,
    imageUrl:string,
    likes?:number
    reviews?:reviews[]
    
}

export interface book {
    books:bookItems[]
}


export enum caseEnum {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
  }