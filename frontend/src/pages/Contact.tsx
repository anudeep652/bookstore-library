import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../app/store";
import Navbar from "../components/Navbar";
import { sendContactMail } from "../features/user/userSlice";

const Contact = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formFields);
    dispatch(sendContactMail(formFields));
    setFormFields({ email: "", subject: "", message: "" });

    navigate("/");
  };
  return (
    <>
      <Navbar name="Contact" />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a feature? Let us
            know.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formFields.email}
                onChange={(e) =>
                  setFormFields({
                    ...formFields,
                    [e.target.name]: e.target.value,
                  })
                }
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formFields.subject}
                onChange={(e) =>
                  setFormFields({
                    ...formFields,
                    [e.target.name]: e.target.value,
                  })
                }
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                name="message"
                value={formFields.message}
                onChange={(e) =>
                  setFormFields({
                    ...formFields,
                    [e.target.name]: e.target.value,
                  })
                }
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-700 first-letter:sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-indigo-600 dark:bg-primary-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-600-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
