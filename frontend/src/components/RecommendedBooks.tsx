import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import { buyBook, rentBook } from "../features/user/userSlice";
import CreateIcon from "@mui/icons-material/Create";

const RecommendedBooks = () => {
  const { books } = useSelector(
    (state: RootState) => state.persistedReducer.book
  );
  const dispatch = useDispatch<AppDispatch>();
  const { username } = useSelector((state: RootState) => state.auth);
  const { boughtBooks, rentedBooks } = useSelector(
    (state: RootState) => state.user
  );

  const { bookName } = useParams();
  // console.log(bookName);

  const recommendedBooks = books.filter((b) => b.name !== bookName);

  return (
    <>
      <h1 className="text-3xl  mx-5 md:mx-20 mt-10 mb-5">
        Recommended for you
      </h1>
      <div className="max-w-sm mx-auto bg-white rounded-xl  overflow-hidden md:max-w-[90%] grid md:grid-cols-2 md:gap-10 ">
        {recommendedBooks.map((b) => (
          <div
            className="md:flex shadow-md my-5 col-span p-5"
            key={b.description}
          >
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={b.imageUrl}
                alt={b.name}
              />
            </div>
            <div className="md:p-8 pl-0 pt-6">
              <div className="capitalize tracking-wide text-2xl text-indigo-500 font-semibold">
                {b.name}
              </div>
              <Link
                to={`/author/${b.author}`}
                className="block mt-1 text-lg leading-tight capitalize font-medium text-black hover:underline"
              >
                {b.author}
              </Link>
              <p className="mt-2 text-slate-500 read-more text-lg">
                {b.description}
              </p>
              <Link to={`/book/${b.name}`} className="read-more-link">
                see more about this book
              </Link>
              <div className="flex mt-1 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              {boughtBooks.some((bookName) => bookName === b.name) ||
              rentedBooks.some((bookName) => bookName === b.name) ? (
                <>
                  {boughtBooks.some((bookName) => bookName === b.name) ? (
                    <h1 className="mb-3 text-xl" key={b.name}>
                      You bought this book
                    </h1>
                  ) : (
                    <h1 className="mb-5 text-xl">You Rented this book</h1>
                  )}

                  <Link to={`/${b.name}/writeReview`}>
                    Write a review{" "}
                    <CreateIcon
                      fontSize="small"
                      className="ml-1 mb-2 cursor-pointer"
                    />
                  </Link>
                </>
              ) : (
                <>
                  <div className="flex mb-5" key={b.name}>
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ${b.payAmount}
                    </span>
                    {/* <button> */}
                    <Link
                      onClick={() => {
                        if (username) {
                          dispatch(buyBook(b.name));
                        }
                      }}
                      to={`/${b.name}/buy`}
                      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    >
                      Buy
                    </Link>
                    {/* </button> */}
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ${b.rentAmount}
                    </span>
                    {/* <button> */}
                    <Link
                      onClick={() => {
                        if (username) {
                          dispatch(rentBook(b.name));
                        }
                      }}
                      to={`${b.name}/rent`}
                      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    >
                      Rent
                    </Link>
                    {/* </button> */}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecommendedBooks;
