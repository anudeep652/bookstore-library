import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { store } from "../../app/store";

import { initialStateUser } from "../../types";
import { BuyABook, rentABook } from "./userService";

const initialState: initialStateUser = {
  email: "",
  username: "",
  boughtBooks: [],
  rentedBooks: [],
};

export const buyBook = createAsyncThunk(
  "book/buyBook",
  async (bookName: string, thunkAPI) => {
    try {
      const { token } = store.getState().auth;
      return await BuyABook(bookName, token || "");
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const rentBook = createAsyncThunk(
  "book/rentBook",
  async (bookName: string, thunkAPI) => {
    try {
      const { token } = store.getState().auth;

      return await rentABook(bookName, token || "");
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload?.email;
      state.username = action.payload?.username;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(buyBook.pending, (state, action: AnyAction) => {})
      .addCase(buyBook.fulfilled, (state, action: AnyAction) => {
        state.boughtBooks.push(action.payload?.book);
      })
      .addCase(buyBook.rejected, (state, action: AnyAction) => {})

      .addCase(rentBook.pending, (state, action: AnyAction) => {})
      .addCase(rentBook.fulfilled, (state, action: AnyAction) => {
        state.rentedBooks.push(action.payload?.book);
      })
      .addCase(rentBook.rejected, (state, action: AnyAction) => {});
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
