import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const ManageClassesCard = ({ item, index }) => {
  const {
    _id,
    name,
    image,
    price,
    status,
    instructor,
    instructor_email,
    available_seats,
  } = item;
  const [axiosSecure] = useAxiosSecure();

  const handleStatus = (value, id) => {
    const status = { value, id };
    axiosSecure.post(`/class-status/${id}`, status).then((postData) => {
      console.log("After Posting: ", { postData });
      // if (postData.data.insertedId) {
      //   toast.success("Item Added Successfully!", {
      //     position: "top-center",
      //     theme: "light",
      //   });
      // }
    });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt={name} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <h4 className="font-bold">{name}</h4>
        </div>
      </td>
      <td> {instructor}</td>
      <td>{instructor_email}</td>
      <td className="text-center"> {available_seats}</td>
      <td className="text-right">${price}</td>
      <td className="text-center flex items-center gap-5 font-semibold">
        {status !== "Approved" ? (
          <>
            <button
              className="w-full py-2 px-5 rounded-full bg-green-700 text-white"
              onClick={() => handleStatus("Approved", _id)}
            >
              Approve
            </button>
            <button
              className="w-full py-2 px-5 rounded-full bg-red-700 text-white"
              onClick={() => handleStatus("Denied", _id)}
            >
              Deny
            </button>
          </>
        ) : (
          <p className="text-green-700 font-bold mx-auto">Approved</p>
        )}
      </td>
    </tr>
  );
};

export default ManageClassesCard;
