import React from "react";
import { Link } from "react-router";

const links = (
  <>
    <Link to="/">
      <li className="m-2">Home</li>
    </Link>
    <Link to="/readList">
      <li className="m-2">ReadList</li>
    </Link>
  </>
);

const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto my-4 navbar bg-base-100 work-sans">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="mr-2 lg:hidden cursor-pointer hover:text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {/* <li>
              <a>Home</a>
            </li>
            <li>
              <a>Listed Books</a>
            </li>
            <li>
              <a>Pages to Read</a>
            </li> */}
            {links}
          </ul>
        </div>
        <a className="font-bold text-3xl cursor-pointer">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <a>Home</a>
          </li>

          <li>
            <a>Listed Books</a>
          </li>
          <li>
            <a>Pages to Read</a>
          </li> */}
          {links}
          <li className="mt-2">
            Pages to Read
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-x-3">
        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
