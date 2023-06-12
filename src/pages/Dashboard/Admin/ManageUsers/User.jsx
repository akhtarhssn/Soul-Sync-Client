import { IoMdRemoveCircle } from "react-icons/io";

const User = ({ user, index, handleDelete, handleMakeAdmin }) => {
  const { name, email, role } = user;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td className=" space-x-4">
        <button
          className="bg-red-600 py-2 px-4 rounded-full text-white"
          onClick={() => handleMakeAdmin(user)}
        >
          Admin
        </button>
        <button className="bg-amber-600 py-2 px-4 rounded-full text-white">
          Instructor
        </button>
        <button className="bg-green-600 py-2 px-4 rounded-full text-white">
          Student
        </button>
      </td>
      <td>
        <button
          className="text-xl bg-red-600 p-2 rounded text-white"
          onClick={() => handleDelete(user)}
        >
          {" "}
          <IoMdRemoveCircle />{" "}
        </button>
      </td>
    </tr>
  );
};

export default User;
