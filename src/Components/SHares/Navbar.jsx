import React, { useEffect, useState } from "react";
import logo from "../../assets/logo .png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ isSearch }) => {
  return (
    <div className="flex h-fit text-white items-center gap-4 w-11/12 mx-auto">
      <div className="">
        <img src={logo} width={"50%"} height={"10px"} alt="" />
      </div>
      <div className="relative w-3/12">
        {isSearch && (
          <div>
            <input
              type="text"
              className="w-72 py-1 pe-2 ps-9 text-slate-600 outline-none border-slate-200 rounded-md"
              placeholder="Search you'r destination"
            />
            <p className="absolute left-2 top-2 text-lg cursor-pointer text-slate-500">
              <FaSearch />
            </p>
          </div>
        )}
      </div>
      <div className="flex-grow">
        <ul
          style={{ listStyle: "none" }}
          className="flex items-center justify-around"
        >
          <li className="cursor-pointer">
            <Link to={"/news"}>News</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/destination"}>Destination</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/Blog"}>Blog</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="ms-auto">
        <button className="bg-rose-400 hover:bg-red-600 py-3 px-8 rounded-md font-semibold text-xl">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
