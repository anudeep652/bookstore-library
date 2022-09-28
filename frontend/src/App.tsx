import React, { useEffect } from "react";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
// import { localStorageUser } from "./types";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { reset } from "./features/user/userSlice";
import Book from "./pages/Book";
import Author from "./pages/Author";

function App() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const { isSuccess } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  console.log(user);

  useEffect(() => {
    dispatch(reset());
  }, [isSuccess, dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="/">
            {user.email ? (
              <Route path="/" element={<Home />} />
            ) : (
              <Route path="/" element={<Login />} />
            )}
          </Route>

          <Route path="/book">
            <Route
              path=":bookName"
              element={user.email ? <Book /> : <Login />}
            />
          </Route>

          <Route
            path="/author/:authorName"
            element={user.email ? <Author /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
