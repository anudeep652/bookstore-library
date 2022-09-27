import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import bookReducer from "../features/books/bookSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
