import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllCourses from "../pages/Home/AllCourse/AllCourses/AllCourses";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import Dashboard from "../Layouts/Dashboard";
import AdminHome from "../pages/Dashboard/Admin/Home/AdminHome";
import InstructorHome from "../pages/Dashboard/Instructor/Home/InstructorHome";
import StudentHome from "../pages/Dashboard/Student/Home/StudentHome";
import PrivateRoute from "./PrivateRoute";

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
    ],
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
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "instructor-home",
        element: <InstructorHome />,
      },
      {
        path: "student-home",
        element: <StudentHome />,
      },
    ],
  },
]);

export default router;
