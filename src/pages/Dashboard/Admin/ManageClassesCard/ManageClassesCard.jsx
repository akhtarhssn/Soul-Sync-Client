import { BsCheck2Square } from "react-icons/bs";
import { AiOutlineCloseSquare } from "react-icons/ai";

const ManageClassesCard = ({ item, index, handleStatus }) => {
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
      <td className="text-right">
        <p
          className={`${
            status === "Approved"
              ? "text-green-700"
              : status === "Denied" && "text-red-600"
          } font-bold mx-auto`}
        >
          {status}
        </p>
      </td>
      <td className="text-center flex items-center gap-5 font-semibold">
        {/* {status !== "Approved" && status !== "Denied" ? (
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
          <p
            className={`${
              status === "Approved"
                ? "text-green-700"
                : status === "Denied" && "text-red-600"
            } font-bold mx-auto`}
          >
            {status}
          </p>
        )} */}

        <button
          className="w-full p-3 rounded-full bg-green-700 text-white"
          onClick={() => handleStatus("Approved", _id)}
        >
          <BsCheck2Square size={25} />
        </button>
        <button
          className="w-full p-3 rounded-full bg-red-700 text-white"
          onClick={() => handleStatus("Denied", _id)}
        >
          <AiOutlineCloseSquare size={25} />
        </button>
      </td>
    </tr>
  );
};

export default ManageClassesCard;
