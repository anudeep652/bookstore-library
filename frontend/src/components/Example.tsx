import React from "react";

const Example = () => {
  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap md:-mx-1 lg:-mx-4">
          {[1, 2, 3, 4, 5].map((n) => (
            <>
              <div
                key={n}
                style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                className="shadow-md
                my-20"
              >
                <div
                  className="container px-5 py-24 mx-auto"
                  style={{ cursor: "auto" }}
                >
                  <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                      alt="ecommerce"
                      className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded "
                      src="https://picsum.photos/600/400/?random"
                      style={{ cursor: "auto" }}
                    />
                    <div
                      className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
                      style={{ cursor: "auto" }}
                    >
                      <h2
                        className="text-gray-900 text-3xl title-font font-medium mb-1 capitalize"
                        style={{ cursor: "auto" }}
                      >
                        book title
                      </h2>
                      <h1
                        className="text-sm title-font text-gray-500 tracking-widest capitalize"
                        style={{ cursor: "auto" }}
                      >
                        by author
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
                      <p className="leading-relaxed">
                        Dui urna vehicula tincidunt pretium consequat luctus mi,
                        platea fermentum conubia tempus ac orci. Pellentesque
                        dictum malesuada cubilia faucibus dignissim mi nascetur
                        senectus, augue ad libero efficitur dolor duis lobortis,
                        non etiam sociosqu maximus enim mus natoque.
                      </p>
                      <div className="flex mt-5 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                      <div className="flex mb-6">
                        <span className="title-font font-medium text-2xl text-gray-900">
                          $45.99
                        </span>
                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                          Buy
                        </button>
                      </div>
                      <div className="flex">
                        <span className="title-font font-medium text-2xl text-gray-900">
                          $45.99
                        </span>
                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                          Rent
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Example;
