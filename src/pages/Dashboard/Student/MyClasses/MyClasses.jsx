import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const MyClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    enabled: !!user && !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/my-classes?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(classes);

  return (
    <div>
      <h2 className="text-white">Hello World</h2>
    </div>
  );
};

export default MyClasses;
