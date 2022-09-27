import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../app/store";
import Navbar from "../components/Navbar";
import RecommendedBooks from "../components/RecommendedBooks";
import Reviews from "../components/Reviews";
import UpArrow from "../components/UpArrow";

const Book = () => {
  const { bookName } = useParams();
  const { books } = useSelector((state: RootState) => state.book);

  //finding the current book
  const currBook = books.filter((b) => b.name === bookName);
  console.log(currBook);

  return (
    <>
      <Navbar />
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
                  alt="ecommerce"
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded "
                  src={currBook[0].imageUrl}
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
                    {currBook[0].name}
                  </p>
                  <h1
                    className="text-lg title-font text-gray-500 tracking-widest capitalize"
                    style={{ cursor: "auto" }}
                  >
                    {currBook[0].author}
                  </h1>
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
                    No one’s captured the free association and imagination of
                    childhood quite the way Watterson has. It slams you with
                    some serious, but healthy, nostalgia, regardless of whether
                    or not you grew up in the same situation as Calvin. There’s
                    also a serious case for Calvin and Hobbes being a collection
                    of short stories instead of comic strips, what with
                    continuity and storylines that run for multiple strips. If
                    you haven’t read it at all or if it’s been a few years, pick
                    up a copy. You’ll be surprised at how profound the comic can
                    be in its simplicity and just how dated it isn’t
                  </h2>
                  <div className="flex mt-5 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                  <div className="flex mb-6">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ${currBook[0].payAmount}
                    </span>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                      Buy
                    </button>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ${currBook[0].rentAmount}
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
      {/* Reviews */}
      <Reviews />
      <RecommendedBooks />
      <UpArrow />
    </>
  );
};

export default Book;
