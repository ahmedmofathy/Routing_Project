import React from "react";
import "./Navbar.modules.css";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar text-white font-bold uppercase flex justify-around items-center p-8">
          <div className="left w-1/2 mx-10">
            <Link to={"/"}>
              {" "}
              <h1 className="text-3xl">
                Start Framework
              </h1>
            </Link>
          </div>
          <div className="right w-1/4 text-l">
            <ul className="flex justify-around ">
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/portfolio"}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
