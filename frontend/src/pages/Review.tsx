import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import Navbar from "../components/Navbar";
import { writeReview } from "../features/books/bookSlice";
import StarRating from "../components/StarRating";
import UpArrow from "../components/UpArrow";

const Review = () => {
  const [stars, setStars] = useState(0);

  const { bookName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { books } = useSelector((state: RootState) => state.book);
  const currBook = books.filter((b) => b.name === bookName);
  const [reviewFields, setReviewFields] = useState({
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = {
      bookName: bookName || "",
      review: reviewFields,
      stars: stars,
    };
    console.log(data);
    dispatch(writeReview(data));
    navigate(`/book/${bookName}`);
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
                  {/* <div className="flex mb-4">
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
                  </div> */}
                  <h2 className="leading-relaxed text-lg">
                    {currBook[0].description}
                  </h2>
                  <div className="flex mt-5 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                  {/* {boughtBooks.some(
                    (bookName) => bookName === currBook[0].name
                  ) ||
                  rentedBooks.some(
                    (bookName) => bookName === currBook[0].name
                  ) ? (
                    <>
                      {boughtBooks.some(
                        (bookName) => bookName === currBook[0].name
                      ) ? (
                        <h1 className="mb-3">You bought this book</h1>
                      ) : (
                        <h1 className="mb-5">You Rented this book</h1>
                      )}

                      <Link to={`/${currBook[0].name}/writeReview`}>
                        Write a review
                        <CreateIcon
                          fontSize="small"
                          className="ml-1 mb-2 cursor-pointer"
                        />
                      </Link>
                    </>
                  ) : (
                    <>
                      <div className="flex mb-6">
                        <span className="title-font font-medium text-2xl text-gray-900">
                          ${currBook[0].payAmount}
                        </span>
                        <Link
                          onClick={() => {
                            if (username) {
                              dispatch(buyBook(currBook[0].name));
                            }
                          }}
                          to={`${currBook[0].name}/buy`}
                          className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                        >
                          Buy
                        </Link>
                      </div>

                      <div className="flex">
                        <span className="title-font font-medium text-2xl text-gray-900">
                          ${currBook[0].rentAmount}
                        </span>
                        <Link
                          onClick={() => {
                            if (username) {
                              dispatch(rentBook(currBook[0].name));
                            }
                          }}
                          to={`${currBook[0].name}/rent`}
                          className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                        >
                          Rent
                        </Link>
                      </div>
                    </>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* write review */}

      <section className="bg-inherit relative">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <StarRating dataPasser={setStars} />
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-indigo-600 ">
            Reviewing the book "{currBook[0].name}"
          </h2>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-black "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={reviewFields.subject}
                onChange={(e) =>
                  setReviewFields({
                    ...reviewFields,
                    [e.target.name]: e.target.value,
                  })
                }
                className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
                placeholder="subject"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-black dark:text-black"
              >
                Your Review message
              </label>
              <textarea
                name="message"
                value={reviewFields.message}
                onChange={(e) =>
                  setReviewFields({
                    ...reviewFields,
                    [e.target.name]: e.target.value,
                  })
                }
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a message..."
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center  rounded-lg first-letter:sm:w-fit hover:bg-indigo-600 hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <UpArrow />
    </>
  );
};

export default Review;
