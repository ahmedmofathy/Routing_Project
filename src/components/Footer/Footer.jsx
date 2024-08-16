import React from "react";
import "./Footer.modules.css";
export default function Footer() {
  return (
    <>
      <footer className="relative bottom-0 w-full h-72 flex flex-col justify-between items-center">
        <div className="text-white flex justify-around items-center container p-10 h-3/4">
          <div className="left w-1/3 text-center flex flex-col justify-around items-center">
            <h1 className="text-3xl font-semibold">LOCATION</h1>
            <span>2215 John Daniel Drive</span>
            <span>Clark, MO 65243</span>
          </div>
          <div className="middle w-1/3 text-center">
            <h1 className="text-3xl font-semibold">AROUND THE WEB</h1>
            <div className="icons flex justify-center gap-2 text-lg py-2">
              <span>
                <i className="fab fa-facebook"></i>
              </span>
              <span>
                <i className="fab fa-instagram"></i>
              </span>
              <span>
                <i className="fab fa-linkedin"></i>
              </span>
              <span>
                <i className="fab fa-x-twitter"></i>
              </span>
            </div>
          </div>
          <div className="right w-1/3 text-center">
            <h1 className="text-3xl font-semibold">ABOUT FREELANCER</h1>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
        <div className="bg-slate-900 w-full flex justify-center items-center h-1/4">
          <p className="text-white">Copyright &copy; Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
