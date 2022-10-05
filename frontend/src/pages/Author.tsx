import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../app/store";
import Navbar from "../components/Navbar";

const Author = () => {
  const { authorName } = useParams();
  const { books } = useSelector((state: RootState) => state.book);

  const booksByAuthor = books.filter((b) => b.author === authorName);

  return (
    <>
      <Navbar name="Home" />

      <h1 className="text-3xl mt-10 " style={{ marginLeft: "350px" }}>
        Books by {authorName}
      </h1>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap md:-mx-1 lg:-mx-4">
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            className="shadow-md
                "
          >
            <div
              className="container px-5 py-12 mx-auto"
              style={{ cursor: "auto" }}
            >
              <div className="lg:w-4/5 md:mx-12 flex flex-wrap">
                <img
                  alt={booksByAuthor[0].name}
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded "
                  src={booksByAuthor[0].imageUrl}
                  style={{ cursor: "auto" }}
                />
                <div
                  className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
                  style={{ cursor: "auto" }}
                >
                  <p
                    className="text-gray-900 text-3xl title-font font-medium mb-1 capitalize"
                    style={{ cursor: "auto" }}
                  >
                    {booksByAuthor[0].name}
                  </p>
                  <Link
                    to={`/author/${booksByAuthor[0].author}`}
                    className="text-lg title-font text-gray-500 tracking-widest capitalize hover:underline"
                    style={{ cursor: "pointer" }}
                  >
                    {booksByAuthor[0].author}
                  </Link>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span className="text-gray-600 ml-3">20 Reviews</span>
                    </span>
                  </div>
                  <h2 className="leading-relaxed text-lg">
                    {booksByAuthor[0].description}
                  </h2>
                  <div className="flex mt-5 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                  <div className="flex mb-6">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ${booksByAuthor[0].payAmount}
                    </span>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                      Buy
                    </button>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ${booksByAuthor[0].rentAmount}
                    </span>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                      Rent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Author;

// export {};
