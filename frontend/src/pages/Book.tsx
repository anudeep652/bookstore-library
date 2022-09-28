import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../app/store";
import Navbar from "../components/Navbar";
import RecommendedBooks from "../components/RecommendedBooks";
import Reviews from "../components/Reviews";
import UpArrow from "../components/UpArrow";

// const GenerateStars = () => {
//   return (

//   )
// }
const Book = () => {
  const { bookName } = useParams();
  const { books } = useSelector((state: RootState) => state.book);

  //finding the current book
  const currBook = books.filter((b) => b.name === bookName);
  console.log(currBook);

  let starsArr: number[] = [];
  let count = currBook[0]?.stars || 0;
  for (let i = 0; i < count; i++) {
    starsArr.push(1);
  }
  console.log(starsArr);

  //return the remaining no of stars without likes
  const remStars = () => {
    if (starsArr.length !== 5) {
      console.log(starsArr.length);
      let count = 5 - starsArr.length;
      starsArr.splice(0, starsArr.length);
      console.log(starsArr);
      for (let i = 0; i < count; i++) {
        starsArr.push(i);
      }
      console.log(starsArr);
      return starsArr.map((s) => (
        <svg
          key={s}
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
      ));
    }
  };

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
                  <Link
                    to={`/author/${currBook[0].author}`}
                    className="text-lg title-font text-gray-500 tracking-widest capitalize  hover:underline"
                    style={{ cursor: "pointer" }}
                  >
                    {currBook[0].author}
                  </Link>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      {starsArr.map((s) => (
                        <svg
                          key={s}
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
                      ))}
                      {remStars()}

                      <span className="text-gray-600 ml-3">
                        {currBook[0].reviews?.length} reviews
                      </span>
                    </span>
                  </div>
                  <h2 className="leading-relaxed text-lg">
                    {currBook[0].description}
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
