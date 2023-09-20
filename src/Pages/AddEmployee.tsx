import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployeeState } from "../redux-toolkit/allEmployeeSlice";

const AddEmployee: React.FC = () => {
  const dispatch = useDispatch();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    mobile: "", // Added the "Mobile" field
    department: "Development", // Default department value
    role: "Administrator", // Default role value
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding employee:", employee);
    const id = Math.round(Math.random());
    dispatch(addEmployeeState({ ...employee, id: id }));

    // Clear the form fields after submission
    setEmployee({
      name: "",
      email: "",
      mobile: "",
      department: "Development",
      role: "Administrator",
    });
  };

  return (
    <div className="max-w-md p-4 mx-auto mt-4 border rounded shadow-lg t-20">
      <h2 className="mb-4 text-xl font-semibold">Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={employee.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="mobile"
          >
            Mobile
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={employee.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter mobile"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="department"
          >
            Department
          </label>
          <select
            id="department"
            name="department"
            value={employee.department}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="Development">Development</option>
            <option value="Quality Assurance">Quality Assurance</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Security">Security</option>
            <option value="Project Management">Project Management</option>
            <option value="Sales and Marketing">Sales and Marketing</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="role"
          >
            Role
          </label>
          <select
            id="role"
            name="role"
            value={employee.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="Administrator">Administrator</option>
            <option value="Manager">Manager</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Developer">Developer</option>
            <option value="Technical Help">Technical Help</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 mx-auto font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
