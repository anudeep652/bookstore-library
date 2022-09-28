import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import Navbar from "../components/Navbar";
import UpArrow from "../components/UpArrow";
import { getBooks } from "../features/books/bookSlice";
import { buyBook, rentBook, setUser } from "../features/user/userSlice";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { books } = useSelector((state: RootState) => state.book);
  const { username, email } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getBooks());
    dispatch(setUser({ username, email }));
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <div className="max-w-sm mx-auto bg-white rounded-xl  overflow-hidden md:max-w-[90%] grid md:grid-cols-2 md:gap-10 ">
        {books.map((book) => (
          // < >
          <div className="md:flex shadow-md my-5 col-span p-10" key={book.name}>
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={book.imageUrl}
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-8">
              <div className="capitalize tracking-wide text-2xl text-indigo-500 font-semibold">
                {book.name}
              </div>
              <Link
                to={`/author/${book.author}`}
                className="block mt-1 text-lg leading-tight capitalize font-medium text-black hover:underline"
              >
                {book.author}
              </Link>
              <p className="mt-2 text-slate-500 read-more text-lg">
                {book.description}
              </p>
              <Link to={`/book/${book.name}`} className="read-more-link">
                see more about this book
              </Link>
              <div className="flex mt-1 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex mb-5">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${book.payAmount}
                </span>
                {/* <button> */}
                <Link
                  onClick={() => dispatch(buyBook(book.name))}
                  to={`/${book.name}/buy`}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Buy
                </Link>
                {/* </button> */}
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${book.rentAmount}
                </span>
                {/* <button> */}
                <Link
                  onClick={() => dispatch(rentBook(book.name))}
                  to={`${book.name}/rent`}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Rent
                </Link>
                {/* </button> */}
              </div>
            </div>
          </div>
          // </>
        ))}
      </div>
      <UpArrow />
    </>
  );
};

export default Home;
