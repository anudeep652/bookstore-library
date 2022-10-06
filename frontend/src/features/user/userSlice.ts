import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { store } from "../../app/store";

import { initialStateUser, localStorageUser } from "../../types";
import { BuyABook, contact, rentABook } from "./userService";

const user: localStorageUser = JSON.parse(localStorage.getItem("user") || "{}");

const initialState: initialStateUser = {
  email: user?.email,
  username: user?.username,
  boughtBooks: user?.boughtBooks,
  rentedBooks: user?.rentedBooks,
};

// buy a book
export const buyBook = createAsyncThunk(
  "user/buyBook",
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

// Rent a book
export const rentBook = createAsyncThunk(
  "user/rentBook",
  async (bookName: string, thunkAPI) => {
    try {
      const { token } = store.getState().auth;
      // console.log(token);
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

// contact
export const sendContactMail = createAsyncThunk(
  "user/sendContactMail",
  async (
    data: { email: string; subject: string; message: string },
    thunkAPI
  ) => {
    try {
      return await contact(data);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.email = "";
      state.username = "";
      state.boughtBooks = [];
      state.rentedBooks = [];
    },
    setUserDetails: (state) => {
      const user: localStorageUser = JSON.parse(
        localStorage.getItem("user") || "{}"
      );
      state.email = user.email;
      state.username = user.username;
      user.boughtBooks?.forEach((b) => {
        !state.boughtBooks?.includes(b) && state.boughtBooks.push(b);
      });
      user.rentedBooks?.forEach((b) => {
        !state.rentedBooks?.includes(b) && state.rentedBooks.push(b);
      });
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
      .addCase(rentBook.rejected, (state, action: AnyAction) => {})
      .addCase(sendContactMail.pending, (state, action: AnyAction) => {})
      .addCase(sendContactMail.fulfilled, (state) => {})
      .addCase(sendContactMail.rejected, (state, action: AnyAction) => {});
  },
});

export const { logout, setUserDetails } = userSlice.actions;
export default userSlice.reducer;
