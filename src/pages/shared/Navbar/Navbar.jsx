import { useContext, useEffect, useState } from "react";
import { BiLogoDevTo, BiLogoLinkedin, BiSolidUser } from "react-icons/bi";
import { BsFillSunFill, BsGithub, BsMoonStarsFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiPaintBrush } from "react-icons/hi2";
import { AuthContext } from "../../../providers/AuthProvider";
import { IoClose } from "react-icons/io5";
import { LiaFacebookF } from "react-icons/lia";
import { Link } from "react-router-dom";
import Logo from "../../../assets/newLogo.png";
import { scrollToSection } from "../../../utils/scrollToSection";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import useStudent from "../../../hooks/useStudent";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { user, handleLogout } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const htmlTag = document.querySelector("html");
    htmlTag.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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

  // Function to close the menu with a delay
  const closeMenuWithDelay = () => {
    // Add a delay of 1 second (1000 milliseconds) before closing the menu
    setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  const menuItem = (
    <>
      <li
        className="text-lg font-NotoSans group flex items-center gap-3 hover:text-primary duration-500"
        onClick={() => open && setOpen(false)}
      >
        <FaBarsStaggered className="text-primary block lg:hidden" size={16} />
        <Link to="/" onClick={() => scrollToSection("home")}>
          Home
          <span className="hidden lg:block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
        </Link>
      </li>
      <li
        className="text-lg font-NotoSans group flex items-center gap-3 hover:text-primary duration-500"
        onClick={() => open && setOpen(false)}
      >
        <HiPaintBrush className="text-primary block lg:hidden" size={16} />
        <Link to="#" onClick={() => scrollToSection("courses")}>
          Courses
          <span className="hidden lg:block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
        </Link>
      </li>
      <li
        className="text-lg font-NotoSans group flex items-center gap-3 hover:text-primary duration-500"
        onClick={() => open && setOpen(false)}
      >
        <BiSolidUser className="text-primary block lg:hidden" size={16} />
        <Link to="#" onClick={() => scrollToSection("instructor")}>
          Instructor
          <span className="hidden lg:block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
        </Link>
      </li>
      {user && (
        <li>
          <Link
            to={
              isAdmin
                ? "/dashboard/manage-classes"
                : isInstructor
                ? "/dashboard/instructor-classes"
                : isStudent && "/dashboard/my-bookings"
            }
          >
            Dashboard
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div
      className={`fixed w-full z-20 py-4 bg-dark px-5 2xl:px-0 text-white ${
        scrolling ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="flex justify-between items-center mx-auto flex-row-reverse"
          // onClick={() => open && setOpen(false)}
        >
          <div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex">
              <ul className="flex gap-6 py-2">
                {menuItem}
                <Link to={"/login"}>
                  <button
                    className={`py-2 px-5 rounded bg-orange-600 dark:bg-orange-500 dark:text-white font-semibold uppercase 
                
                `}
                  >
                    Login
                  </button>
                </Link>
                <div
                  className={`flex items-center ms-5 ${darkMode ? "dark" : ""}`}
                >
                  <button
                    onClick={toggleDarkMode}
                    className={`dark:text-black ${
                      scrolling ? "text-black" : "text-white"
                    }`}
                  >
                    {darkMode ? (
                      <BsFillSunFill size={20} />
                    ) : (
                      <BsMoonStarsFill size={20} />
                    )}
                  </button>
                  {/* Rest of your component */}
                </div>
              </ul>
            </div>
            {/* Desktop Menu End */}
            <div className="navbar-end flex justify-end ">
              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar border-white"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-8 shadow bg-base-100 text-black rounded-box w-52"
                  >
                    <p>
                      <small>Hello! </small>
                      <strong>{user?.displayName}</strong>
                    </p>
                    <li className="">
                      <Link
                        to="/dashboard/my-bookings"
                        className="justify-between"
                      >
                        Profile
                      </Link>
                    </li>
                    <li className="">
                      <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                    <li className="">
                      <Link onClick={handleLogout}>Logout</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to={"/login"}>
                  <button className="block lg:hidden py-2 px-5 rounded bg-orange-600 dark:bg-orange-500 dark:text-white font-semibold uppercase">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div>
            <div>
              <label
                onClick={() => setOpen(!open)}
                className={`btn btn-ghost lg:hidden cursor-pointer ${
                  open && "hidden"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 rotate-180"
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
              {/* Mobile Menu */}
              <div
                className={`${
                  open
                    ? "top-0 left-0 text-white bg-black"
                    : "top-0 -left-[500px] lg:hidden"
                } bg-bg-gray px-8 py-10 text-lg absolute z-10 transition-all duration-500 h-screen flex flex-col justify-between`}
              >
                <div>
                  <span className="flex justify-between items-center">
                    Menu{" "}
                    <span
                      onClick={() => open && closeMenuWithDelay()}
                      className="p-5 group cursor-pointer"
                    >
                      <IoClose
                        size={25}
                        className="group-hover:scale-125 duration-500 group-hover:rotate-90"
                      />
                    </span>
                  </span>
                  <ul className="w-52 flex flex-col gap-4 mt-10">{menuItem}</ul>
                </div>
                <div className="mb-20">
                  {/* Social */}
                  <div className="mb-10">
                    <h4 className="text-white font-bold text-lg my-5">
                      Social
                    </h4>
                    <div className="flex gap-5 items-center text-gray-400">
                      <Link
                        to="https://www.facebook.com/mohammedakhtar07/"
                        target="_blank"
                      >
                        <button
                          className="
                transition hover:scale-150 duration-300 border-primary border-2 rounded-full p-3 text-primary"
                        >
                          <LiaFacebookF size={16} />
                        </button>
                      </Link>
                      <Link
                        to="https://www.linkedin.com/in/mohammedakhtar7/"
                        target="_blank"
                      >
                        <button
                          className="
                transition hover:scale-150 duration-300 border-primary border-2 rounded-full p-3 text-primary"
                        >
                          <BiLogoLinkedin size={16} />
                        </button>
                      </Link>
                      <Link to="https://github.com/Wixden" target="_blank">
                        <button
                          className="
                transition hover:scale-150 duration-300 border-primary border-2 rounded-full p-3 text-primary"
                        >
                          <BsGithub size={16} />
                        </button>
                      </Link>
                      <Link to="https://dev.to/wixden" target="_blank">
                        <button
                          className="
                transition hover:scale-150 duration-300 border-primary border-2 rounded-full p-3 text-primary"
                        >
                          <BiLogoDevTo size={16} />
                        </button>
                      </Link>
                    </div>
                  </div>
                  {/* Social Links End */}
                  <img className="mx-auto" src={Logo} alt="Logo" />
                </div>
              </div>
              {/* Mobile Menu End */}
            </div>
            <Link
              className="hidden lg:block text-white font-bold text-3xl"
              to="/"
              onClick={() => scrollToSection("home")}
            >
              <img className="h-14" src={Logo} alt="Logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
