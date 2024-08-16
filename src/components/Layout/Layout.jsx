import React from "react";
import "./Layout.modules.css";
import { Outlet } from "react-router-dom";
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
export default function Layout() {
  return <>
  <Navbar/>
  <Outlet></Outlet>
  <Footer/>
  </>;
}
