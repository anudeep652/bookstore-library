import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../app/store";

const RecommendedBooks = () => {
  const { books } = useSelector((state: RootState) => state.book);

  const { bookName } = useParams();
  console.log(bookName);

  const recommendedBooks = books.filter((b) => b.name !== bookName);

  return (
    <>
      <h1 className="text-3xl  mx-5 md:mx-20 mt-10 mb-5">
        Recommended for you
      </h1>
      <div className="max-w-sm mx-auto bg-white rounded-xl  overflow-hidden md:max-w-[90%] grid md:grid-cols-2 md:gap-10 ">
        {recommendedBooks.map((b) => (
          <div className="md:flex shadow-md my-5 col-span p-5" key={b.name}>
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={b.imageUrl}
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-8">
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
              <Link
                to={`/book/${b.name}`}
                replace={true}
                className="read-more-link"
              >
                see more about this book
              </Link>
              <div className="flex mt-1 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex mb-5">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${b.payAmount}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Buy
                </button>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${b.rentAmount}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Rent
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecommendedBooks;
