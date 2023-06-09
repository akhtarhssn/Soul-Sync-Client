import AllCourse from "../AllCourse/AllCourse";
import Banner from "../Banner/Banner";
import Membership from "../Membership/Membership";
import WorkOut from "../WorkOut/WorkOut";

const Home = () => {
  return (
    <div>
      <Banner />
      <WorkOut />
      <Membership />
      <AllCourse />
    </div>
  );
};

export default Home;
