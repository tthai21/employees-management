import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux-toolkit/store";

const AllEmployees: React.FC = () => {
  const navigate = useNavigate();
  const employees: Employee[] = useSelector(
    (state: RootState) => state.employees.Employees
  );
  return (
    <>
      <div className="p-4 mx-16 mt-10 rounded-md">
        <div className="grid w-screen grid-cols-6 gap-4 mb-5">
          <div className="text-2xl font-bold">Name</div>
          <div className="text-2xl font-bold">Email</div>
          <div className="text-2xl font-bold">Mobile</div>
          <div className="text-2xl font-bold">Department</div>
          <div className="text-2xl font-bold">Role</div>
        </div>
        {employees.map((employee) => (
          <React.Fragment key={employee.id}>
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
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default AllEmployees;
