import React from "react";
import { Link } from "react-router-dom";
import resumefile from "../../../assets/Resume-Of-Faria-Sultana.pdf";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-navy">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-green-600 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">
                {" "}
                <li>
                  <a className="text-xl text-green-600">Home</a>
                </li>
              </Link>
             <li>
                <a href="#about"  className="text-xl text-green-600">About</a>
              </li>

              <Link to='/blog'> <li>
              <a className="text-xl text-green-600">Blog</a>
            </li></Link>
              <li>
                <a className="text-xl text-green-600">Contact</a>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-2xl ml-8 text-green-600">
            Faria Rahman
          </a> */}

          <div className="clip-path-mypolygon px-6 py-2 ml-8 border-green-600 border-4 text-center">
          <a className="text-center text-3xl font-mono font-bold  text-green-600">
            F
          </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/">
              {" "}
              <li>
                <a className="text-xl text-green-600">Home</a>
              </li>
            </Link>
           <li>
                <a href="#about" className="text-xl text-green-600">About</a>
              </li>

           <Link to='/blog'> <li>
              <a className="text-xl text-green-600">Blog</a>
            </li></Link>
            <li>
              <a className="text-xl text-green-600" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href={resumefile} download={resumefile}>
            <button className="lg:mr-16 rounded-lg btn border bg-navy text-green-600 border-green-600">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
