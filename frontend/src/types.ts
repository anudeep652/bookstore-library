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


export enum caseEnum {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
  }