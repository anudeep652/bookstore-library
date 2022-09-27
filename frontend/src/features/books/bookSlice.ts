import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { book, bookItems } from "../../types";
import { getAllBooks } from "./bookService";

const initialState: book = {
  books: [
    {
      name: "",
      author: "",
      payAmount: 10,
      rentAmount: 100,
      imageUrl: "",
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

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    reset: (state) => {
      state.books = [
        { name: "", author: "", payAmount: 0, rentAmount: 0, imageUrl: "" },
      ];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state, action: AnyAction) => {})
      .addCase(getBooks.fulfilled, (state, action: AnyAction) => {
        state.books = action.payload?.books;
      })
      .addCase(getBooks.rejected, (state, action: AnyAction) => {});
  },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
