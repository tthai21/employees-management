import React from "react";
import { useNavigate } from "react-router-dom";

interface AppProps {
  employee: Employee;
}

const Employee: React.FC<AppProps> = ({ employee }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid w-screen h-12 grid-cols-6 gap-4 mt-4">
        <div className="w-2/3 py-3">{employee.name}</div>
        <div className="w-2/3 py-3">{employee.email}</div>
        <div className="w-2/3 py-3">{employee.mobile}</div>
        <div className="w-2/3 py-3">{employee.department}</div>
        <div className="w-2/3 py-3">{employee.role}</div>
        <div className="flex items-center w-full space-x-2">
          <button
            onClick={() => navigate(`/edit-employee/${employee.id}`)}
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Edit
          </button>
          <button
            // onClick={() => onRemove(employee.id)}
            className="px-4 py-2 text-white bg-red-500 rounded"
          >
            Remove
          </button>
        </div>
      </div>
      <hr className="w-full mt-2 border-gray-400" />
    </>
  );
};

export default Employee;
