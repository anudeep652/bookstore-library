import React, { useEffect } from "react";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import { localStorageUser } from "./types";
import Dashboard from "./pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { reset } from "./features/user/userSlice";

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
              <Route path="/" element={<Dashboard />} />
            ) : (
              <Route path="/" element={<Login />} />
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
