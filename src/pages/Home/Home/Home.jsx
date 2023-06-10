import TopCourses from "../AllCourse/TopCourses/TopCourses";
import Banner from "../Banner/Banner";
import Membership from "../Membership/Membership";
import TopInstructor from "../TopInstructor/TopInstructor";
import WorkOut from "../WorkOut/WorkOut";

const Home = () => {
  return (
    <div>
      <Banner />
      <WorkOut />
      <Membership />
      <TopCourses />
      <TopInstructor />
    </div>
  );
};

export default Home;
