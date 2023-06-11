import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllCourses from "../pages/Home/AllCourse/AllCourses/AllCourses";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import AdminHome from "../pages/Dashboard/Admin/Home/AdminHome";
import InstructorHome from "../pages/Dashboard/Instructor/Home/InstructorHome";
import StudentBookings from "../pages/Dashboard/Student/Bookings/StudentBookings";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import MyClasses from "../pages/Dashboard/Student/MyClasses/MyClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <AllCourses />,
      },
      {
        path: "/instructors",
        element: <AllInstructors />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "admin-home", // Update path to use relative path
            element: <AdminHome />,
          },
          {
            path: "instructor-home", // Update path to use relative path
            element: <InstructorHome />,
          },
          {
            path: "my-bookings", // Update path to use relative path
            element: <StudentBookings />,
          },
          {
            path: "my-payments", // Update path to use relative path
            element: <Payment />,
          },
          {
            path: "my-classes", // Update path to use relative path
            element: <MyClasses />,
          },
        ],
      },
    ],
  },
]);

export default router;
