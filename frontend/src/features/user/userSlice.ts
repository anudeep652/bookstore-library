import {  AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialStateType, localStorageUser, loginType, registerType } from "../../types";
import { loginUser, registerUser } from "./userService";

const user:localStorageUser = JSON.parse(localStorage.getItem('user') || '{}') 

const initialState:initialStateType = {
    username:user?.username,
    email:user?.username,
    isError:false,
    isSuccess:false,
    isLoggedIn:false,
    message:''
}




//register user
export const register = createAsyncThunk('auth/register',async(data:registerType,thunkAPI) => {
    try {
        return await registerUser(data)
        
    } catch (error:any) {

        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
        
    }
})

//login user
export const login = createAsyncThunk('auth/login',async(data:loginType,thunkAPI) => {
    try {
        return await loginUser(data)
        
    } catch (error:any) {

        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
        
    }
})

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers : {
        reset : (state) => {
            state.isError=false
            state.isSuccess=false
            state.message=''
        },
        logout : (state) => {
            localStorage.removeItem('user')
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending,(state) => {
            
        })
        .addCase(register.fulfilled,(state,action) => {
            state.email = action.payload.email
            state.username  = action.payload.username
            state.isSuccess = true
            state.isLoggedIn=true
        })
        .addCase(register.rejected,(state,action:AnyAction) => {
          state.isError = true
          state.message = action?.payload
        })
        .addCase(login.pending,(state) => {
            
        })
        .addCase(login.fulfilled,(state,action) => {
            state.email = action?.payload?.email
            state.username  = action?.payload?.username
            state.isSuccess = true
            state.isError= false
            state.isLoggedIn=true
        })
        .addCase(login.rejected,(state,action:AnyAction) => {
            state.isError = true
            state.message=action?.payload
        })
    }
})

export const { reset } = userSlice.actions
export default userSlice.reducer 