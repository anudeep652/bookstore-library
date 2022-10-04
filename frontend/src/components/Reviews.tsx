import React, { useState } from "react";
import { reviews } from "../types";

const Reviews = ({ reviewsArr }: { reviewsArr: reviews[] }) => {
  const [menu, setMenu] = useState(true);

  const generateRemaining = (arr: any[], count: number) => {
    let filledStarsJSX = arr.map((el) => (
      <svg
        key={el}
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
    ));
    let rem = 5 - count;
    let tempArr: 0[] = [];
    for (let j = 0; j < rem; j++) {
      tempArr.push(0);
    }

    const emptyStarsJSX = tempArr.map((el) => (
      <svg
        key={el}
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
    return (
      <>
        {filledStarsJSX}
        {emptyStarsJSX}
      </>
    );
  };

  const generateFilledStarArray = (n: number) => {
    let arr: 0[] = [];
    for (let i = 0; i < n; i++) {
      arr.push(0);
    }
    if (arr.length === 5) {
      return arr.map((el) => (
        <svg
          key={el}
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
      ));
    } else {
      return generateRemaining(arr, arr.length);
    }
  };

  return (
    <>
      <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
        <div className="flex flex-col justify-start items-start w-full space-y-8">
          <div className="flex justify-start items-start">
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
              Reviews
            </p>
          </div>
          {reviewsArr.length > 0 ? (
            reviewsArr.map((n) => (
              <div
                className="w-full flex justify-start items-start flex-col bg-gray-50 p-8"
                key={n.message}
              >
                <div className="flex flex-col md:flex-row justify-between w-full ">
                  <div className="flex flex-row justify-between items-start">
                    <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">
                      {n.subject}
                    </p>
                    <button
                      onClick={() => setMenu(!menu)}
                      className="ml-4 md:hidden"
                    >
                      <svg
                        className={
                          "transform " + (menu ? "rotate-180" : "rotate-0")
                        }
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 12.5L10 7.5L5 12.5"
                          stroke="#1F2937"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className=" mt-2 md:mt-0 stars">
                    <div className="stars flex gap-1 cursor-default">
                      {n.stars === 0
                        ? [1, 2, 3, 4, 5].map((s) => (
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
                          ))
                        : generateFilledStarArray(n.stars)}
                    </div>
                  </div>
                </div>
                <div className={"md:block " + (menu ? "block" : "hidden")}>
                  <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6 shgv">
                    {n.message}
                  </p>

                  <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                    <div>
                      <img
                        className="h-8 w-8 rounded-full outline-none"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="girl-avatar"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-start space-y-2">
                      <p className="text-base font-medium leading-none text-gray-800">
                        {n.reviewer}
                      </p>
                      <p className="text-sm leading-none text-gray-600">
                        {n.date?.slice(0, 10).split("-").reverse().join("/")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-2xl">No reviews yet</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Reviews;
