import React, { useEffect } from "react";
import Login from "./pages/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { logout, reset } from "./features/auth/authSlice";
import Book from "./pages/Book";
import Author from "./pages/Author";
import ThankYouPage from "./pages/ThankYouPage";
import Contact from "./pages/Contact";
import MyBooks from "./pages/MyBooks";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Review from "./pages/Review";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    navigate("/user/login");
  }, [dispatch, navigate]);

  return <></>;
};
function App() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const { isSuccess } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  // console.log(user);

  useEffect(() => {
    dispatch(reset());
  }, [isSuccess, dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*login and register routes  */}
          <Route path="/user">
            <Route
              path="login"
              element={!user.email ? <Login /> : <Navigate to={"/"} />}
            />
            <Route
              path="register"
              element={!user.email ? <Register /> : <Navigate to={"/"} />}
            />
          </Route>

          {/* Home route */}
          <Route
            path="/"
            element={user.email ? <Home /> : <Navigate to={"/user/login"} />}
          />

          {/* book routes */}
          <Route path="/book">
            <Route
              path=":bookName"
              element={user.email ? <Book /> : <Navigate to={"/user/login"} />}
            />
          </Route>
          {/* <Route path="/login" element={<Login />} /> */}

          {/* author route */}
          <Route
            path="/author/:authorName"
            element={user.email ? <Author /> : <Navigate to={"/user/login"} />}
          />

          {/* purchase routes*/}
          <Route>
            <Route
              path=":bookName/buy"
              element={
                user.email ? (
                  <ThankYouPage mode="buy" />
                ) : (
                  <Navigate to={"/user/login"} />
                )
              }
            />
            <Route
              path=":bookName/rent"
              element={
                user.email ? (
                  <ThankYouPage mode="rent" />
                ) : (
                  <Navigate to={"/user/login"} />
                )
              }
            />
          </Route>

          {/* My books */}
          <Route
            path="/mybooks"
            element={user.email ? <MyBooks /> : <Navigate to={"/user/login"} />}
          />

          {/*write review */}
          <Route path="/:bookName/writeReview" element={<Review />} />

          {/* logout route */}
          <Route path="/logout" element={<Logout />} />

          {/* contact route */}
          <Route path="/contact" element={<Contact />} />

          {/* About page */}
          <Route path="/about" element={<About />} />

          {/* 404 not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
