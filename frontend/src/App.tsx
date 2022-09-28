import React, { useEffect } from "react";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { logout, reset } from "./features/auth/authSlice";
import Book from "./pages/Book";
import Author from "./pages/Author";
import ThankYouPage from "./pages/ThankYouPage";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    navigate("/login");
  }, []);
  return <></>;
};
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
          {/*login and register routes  */}
          <Route path="/user">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="/" element={<Home />} />

          {/* book routes */}
          <Route path="/book">
            <Route
              path=":bookName"
              element={user.email ? <Book /> : <Login />}
            />
          </Route>
          <Route path="/login" element={<Login />} />

          {/* author route */}
          <Route
            path="/author/:authorName"
            element={user.email ? <Author /> : <Login />}
          />

          {/* purchase routes*/}
          <Route>
            <Route
              path=":bookName/buy"
              element={user.email ? <ThankYouPage mode="buy" /> : <Login />}
            />
            <Route
              path=":bookName/rent"
              element={user.email ? <ThankYouPage mode="rent" /> : <Login />}
            />

            {/* logout route */}
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
