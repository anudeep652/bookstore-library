import { ActionTypes } from "@mui/base";
import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { store } from "../../app/store";
import { book } from "../../types";
import { getAllBooks, review } from "./bookService";

const initialState: book = {
  books: [
    {
      name: "",
      author: "",
      payAmount: 10,
      rentAmount: 100,
      imageUrl: "",
      description: "",
    },
  ],
};

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    try {
      return await getAllBooks();
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

// write review
export const writeReview = createAsyncThunk(
  "user/writeReview",
  async (
    data: {
      bookName: string;
      review: { subject: string; message: string };
      stars: number;
    },
    thunkAPI
  ) => {
    try {
      const { token } = store.getState().auth;
      return await review(data.bookName, token || "", data?.review, data.stars);
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

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    reset: (state) => {
      state.books = [
        {
          name: "",
          author: "",
          payAmount: 0,
          rentAmount: 0,
          imageUrl: "",
          description: "",
        },
      ];
    },
    setReviews: (state) => {
      const review = JSON.parse(localStorage.getItem("review") || "{}");
      if (review.bookName) {
        state.books.forEach(
          (b) => b.name === review.bookName && b.reviews?.push(review.review)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state, action: AnyAction) => {})
      .addCase(getBooks.fulfilled, (state, action: AnyAction) => {
        state.books = action.payload?.books;
      })
      .addCase(getBooks.rejected, (state, action: AnyAction) => {})
      .addCase(writeReview.pending, (state, action: AnyAction) => {})
      .addCase(writeReview.fulfilled, (state, action: AnyAction) => {
        state.books.forEach(
          (b) =>
            b.name === action.payload.bookName &&
            b.reviews?.push(action.payload.review)
        );
      })
      .addCase(writeReview.rejected, (state, action: AnyAction) => {});
  },
});

export const { reset, setReviews } = bookSlice.actions;
export default bookSlice.reducer;
