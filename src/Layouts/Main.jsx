import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
