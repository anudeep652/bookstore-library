import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import UpArrow from "../components/UpArrow";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-sm mx-auto bg-white rounded-xl  overflow-hidden md:max-w-[90%] grid md:grid-cols-2 md:gap-10 ">
        {[1, 2, 3, 4, 5].map((n) => (
          // < >
          <div className="md:flex shadow-md my-5 col-span p-10" key={n}>
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="https://coolmaterial.com/wp-content/uploads/2016/08/The-Odyssey-Homer.jpg"
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-8">
              <div className="capitalize tracking-wide text-2xl text-indigo-500 font-semibold">
                book title
              </div>
              <Link
                to={`/author/author`}
                className="block mt-1 text-lg leading-tight capitalize font-medium text-black hover:underline"
              >
                by author
              </Link>
              <p className="mt-2 text-slate-500 read-more text-lg">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, necessitatibus.
              </p>
              <Link to={"/book"} className="read-more-link">
                see more about this book
              </Link>
              <div className="flex mt-1 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex mb-5">
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
          // </>
        ))}
      </div>
      <UpArrow />
    </>
  );
};

export default Dashboard;
