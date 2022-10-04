import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../app/store";
import { caseEnum } from "../types";
import "./thankyoupage.css";
const ThankYouPage = ({ mode }: { mode: "buy" | "rent" }) => {
  const { bookName } = useParams();

  const { email } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <div className="content">
        <div className="wrapper-1">
          <div className="wrapper-2 ">
            <h1 className="text-6xl mb-5">Thank you !</h1>
            <p>
              Thanks for {mode}ing the book{" "}
              <span className="text-black">"{bookName}"</span>
            </p>
            <p>
              you should receive a confirmation email to{" "}
              <span className="text-black">{email}</span>{" "}
            </p>
            <div className="button mt-5">
              <Link to={"/"} className="go-home ">
                go home
              </Link>
            </div>
          </div>
          <div className="footer-like">
            <p>
              Email not received?
              <Link to="mailto:anudeepsvka@gmail.com">
                Click here to contact admin
              </Link>
            </p>
          </div>
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro"
        rel="stylesheet"
      ></link>
    </>
  );
};

export default ThankYouPage;
