import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar name="About" />
      <div
        className="container  h-full w-100 text-black m-auto p-5 mt-10 shadow-sm bg-white"
        style={{ backgroundColor: "#" }}
      >
        <p className=" text-xl">
          This website is entirely made for learning purposes only.
        </p>
        <p className="text-xl">
          All the images, text content are taken from{" "}
          <a
            target="blank"
            href="https://coolmaterial.com/feature/50-books-every-man-should-read-once-in-his-life/"
            className="text-indigo-600"
          >
            coolmaterial.com
          </a>
        </p>
      </div>
    </>
  );
};

export default About;
