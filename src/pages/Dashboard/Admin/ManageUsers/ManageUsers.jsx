import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import User from "./User";
import Loader from "../../../../components/Loader";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/manage-users");
      return res.data;
    },
  });

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to remove ${user.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              refetch();
              toast.success(`${user.name} has been Removed.`);
            }
          });
      }
    });
  };
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to make ${user.name} an admin`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((postData) => {
          console.log("After Posting: ", { postData });
          if (postData.data.modifiedCount) {
            refetch(),
              toast.success("Item Added Successfully!", {
                position: "top-center",
                theme: "light",
              });
          }
        });
      }
    });
  };

  return (
    <div className="p-5">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <div className="container bg-white w-full mx-auto p-5 md:p-10 rounded-md">
        <div className=" text-xl font-semibold">
          <h4>Total Users: {users.length}</h4>
        </div>

        <div className="overflow-x-auto my-10">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="text-center">Action</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && <Loader />}
              {users.map((user, index) => (
                <User
                  key={user._id}
                  user={user}
                  index={index}
                  handleDelete={handleDelete}
                  handleMakeAdmin={handleMakeAdmin}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
