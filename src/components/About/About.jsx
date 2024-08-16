import React from "react";
import "./About.modules.css";
export default function About() {
  return (
    <>
      <div className="main-bg main-h flex items-center justify-center">
        <div className="content text-white flex flex-col justify-center items-center">
          <h1 className="text-5xl uppercase font-bold my-3">about component</h1>
          <div className="flex justify-center items-center my-3">
            {" "}
            <span className="line bg-white"></span>
            <i className="fas fa-star mx-3"></i>
            <span className="line bg-white"></span>
          </div>
          <div className="container flex justify-around items-center w-4/5">
            <p className="p-5">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="p-5">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
