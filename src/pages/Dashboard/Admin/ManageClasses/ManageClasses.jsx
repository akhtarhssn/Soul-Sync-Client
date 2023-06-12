import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Loader from "../../../../components/Loader";
import ManageClassesCard from "../ManageClassesCard/ManageClassesCard";

const ManageClasses = () => {
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/all-classes");
      return res.json();
    },
  });

  return (
    <div className="p-5">
      <Helmet>
        <title>Soul Sync | Manage Classes</title>
      </Helmet>
      <div className="bg-[#f7f7f7] dark:bg-white dark:shadow-md max-w-7xl mx-auto p-10 rounded-md">
        {isLoading && <Loader />}
        <div className="overflow-x-auto my-10">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th className="text-center">Available Seats</th>
                <th className="text-right">Price</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((item, index) => (
                <ManageClassesCard key={item._id} item={item} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
