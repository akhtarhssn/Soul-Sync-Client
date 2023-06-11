import { Link, NavLink, Outlet } from "react-router-dom";
import { FiCalendar, FiHome } from "react-icons/fi";
import { BiNotepad } from "react-icons/bi";
import { HiOutlineBars4 } from "react-icons/hi2";
import { BsWallet2 } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineContactSupport, MdOutlineRateReview } from "react-icons/md";
import { FaBars, FaUsers } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const isAdmin = false;
  const isInstructor = false;
  const isStudent = true;

  return (
    <div>
      <Helmet>
        <title>Soul Sync | Dashboard Home</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content md:py-10 py-5">
          {/* Page content here */}
          <div className="px-5 pt-20">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <HiOutlineBars4 />
            </label>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side pt-[103px]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu dark:text-black dark:bg-black p-4 w-80 h-full bg-gradient-to-b from-orange-600 to-orange-400 text-white md:py-10">
            <div className="uppercase px-4 py-0 mb-14">
              <Link to="/">
                <h4 className="text-2xl font-bold">Soul Sync</h4>
                <p className="tracking-[.38em]">Empower your soul</p>
              </Link>
            </div>
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/admin-home">
                    {" "}
                    <FiHome /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-items">
                    {" "}
                    <AiOutlineBars /> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-bookings">
                    <BiNotepad />
                    Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-cart">
                    <SiGoogleclassroom />
                    My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/all-users">
                    {" "}
                    <FaUsers /> All Users
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink to="/dashboard/instructor-home">
                    {" "}
                    <FiHome /> Instructor Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard">
                    <FiCalendar /> My Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard">
                    {" "}
                    <MdOutlineRateReview /> Add Classes
                  </NavLink>
                </li>
              </>
            ) : (
              isStudent && (
                <>
                  <li>
                    <NavLink to="/dashboard/my-bookings">
                      <FiCalendar /> Bookings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/my-payments">
                      {" "}
                      <BsWallet2 /> Payment History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/my-classes">
                      <SiGoogleclassroom /> My Classes
                    </NavLink>
                  </li>
                </>
              )
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FiHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                <FaBars /> Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructors">
                <SiGoogleclassroom /> Instructor
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <MdOutlineContactSupport /> Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
