import React from "react";
import "./Home.modules.css";
import avatar from "../../assets/avataaars (1).svg";
export default function Home() {
  return (
    <>
      <div className="main-bg main-h">
        <div className="container flex flex-col justify-center items-center text-white">
          <div className="image">
            <img className="w-5/6" src={avatar} alt="avatar" />
          </div>
          <div className="content flex flex-col justify-center items-center my-3">
            <h1 className="text-5xl uppercase font-bold my-5">
              start Framework
            </h1>
            <div className="flex justify-center items-center my-3">
              {" "}
              <span className="line bg-white"></span>
              <i className="fas fa-star mx-3"></i>
              <span className="line bg-white"></span>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </>
  );
}
