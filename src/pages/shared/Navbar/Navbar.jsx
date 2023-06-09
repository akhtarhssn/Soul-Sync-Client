import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsMoonStarsFill } from "react-icons/bs";
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const htmlTag = document.querySelector("html");
    htmlTag.classList.toggle("dark");
    console.log(htmlTag);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navMenuList = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div
      className={`navbar fixed z-10 ${
        scrolling
          ? "bg-white text-black border-b border-b-gray-200"
          : "bg-black dark:bg-white bg-opacity-0 dark:text-black text-white"
      }`}
    >
      <div className="max-w-7xl container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-compact dropdown-content mt-3 p-8 shadow bg-base-100 text-black rounded-box w-52"
            >
              {navMenuList}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">SoulSync</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-lg">
            {navMenuList}
          </ul>
        </div>
        <div className="navbar-end flex justify-end ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-8 shadow bg-base-100 text-black rounded-box w-52"
            >
              <p>
                <small>Hello! </small>
                SoulSync
              </p>
              <li>
                <Link to="/dashboard/user-home" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
          <div className={`flex items-center ms-5 ${darkMode ? "dark" : ""}`}>
            <button
              onClick={toggleDarkMode}
              className="dark:text-black text-white"
            >
              <BsMoonStarsFill size={20} />
            </button>
            {/* Rest of your component */}
          </div>
          {/* <Link className="btn" to="/login">
              Login
            </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
