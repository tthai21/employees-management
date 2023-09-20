import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import { useParams } from "react-router-dom";

const AddEmployee: React.FC = () => {
  const [employee, setEmployee] = useState<Employee>({
    id: null,
    name: null,
    email: null,
    mobile: null,
    department: null,
    role: null,
  });

  const { id } = useParams<{ id: string }>();

  const currentEmployees: Employee[] = useSelector(
    (state: RootState) => state.employees.Employees
  );
  const currentEmployee = currentEmployees.find(
    (employee) => employee.id?.toString() === id
  );

  useEffect(() => {
    if (currentEmployee) {
      setEmployee(currentEmployee);
    }
  }, [currentEmployee]);
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
    console.log(`Edited employee: ${employee.name} `, employee);
  };

  return (
    <div className="max-w-md p-4 mx-auto mt-20 border rounded shadow-lg t-20">
      <h2 className="mb-4 text-xl font-semibold text-center">Edit Employee</h2>
      {
        employee ? (
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
                value={employee.name || ""}
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
                value={employee.email || ""}
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
                value={employee.mobile || ""}
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
                value={employee.department || ""}
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
                value={employee.role || ""}
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
              Update Employee
            </button>
          </form>
        ) : null
        // <form onSubmit={handleSubmit}>
        //   <div className="mb-4">
        //     <label
        //       className="block mb-2 text-sm font-bold text-gray-700"
        //       htmlFor="name"
        //     >
        //       Name
        //     </label>
        //     <input
        //       type="text"
        //       id="name"
        //       name="name"
        //       value="Alex"
        //       className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        //       placeholder="Enter name"
        //       required
        //     />
        //   </div>
        //   <div className="mb-4">
        //     <label
        //       className="block mb-2 text-sm font-bold text-gray-700"
        //       htmlFor="email"
        //     >
        //       Email
        //     </label>
        //     <input
        //       type="email"
        //       id="email"
        //       name="email"
        //       // value={employee.email}
        //       className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        //       placeholder="Enter email"
        //       required
        //     />
        //   </div>
        //   <div className="mb-4">
        //     <label
        //       className="block mb-2 text-sm font-bold text-gray-700"
        //       htmlFor="mobile"
        //     >
        //       Mobile
        //     </label>
        //     <input
        //       type="text"
        //       id="mobile"
        //       name="mobile"
        //       // value={employee.mobile}
        //       className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        //       placeholder="Enter mobile"
        //       required
        //     />
        //   </div>
        //   <div className="mb-4">
        //     <label
        //       className="block mb-2 text-sm font-bold text-gray-700"
        //       htmlFor="department"
        //     >
        //       Department
        //     </label>
        //     <select
        //       id="department"
        //       name="department"
        //       // value={employee.department}
        //       className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        //     >
        //       <option value="Development">Development</option>
        //       <option value="Quality Assurance">Quality Assurance</option>
        //       <option value="Infrastructure">Infrastructure</option>
        //       <option value="Technical Support">Technical Support</option>
        //       <option value="Security">Security</option>
        //       <option value="Project Management">Project Management</option>
        //       <option value="Sales and Marketing">Sales and Marketing</option>
        //     </select>
        //   </div>
        //   <div className="mb-4">
        //     <label
        //       className="block mb-2 text-sm font-bold text-gray-700"
        //       htmlFor="role"
        //     >
        //       Role
        //     </label>
        //     <select
        //       id="role"
        //       name="role"
        //       // value={employee.role}
        //       className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        //     >
        //       <option value="Administrator">Administrator</option>
        //       <option value="Manager">Manager</option>
        //       <option value="Supervisor">Supervisor</option>
        //       <option value="Developer">Developer</option>
        //       <option value="Technical Help">Technical Help</option>
        //     </select>
        //   </div>
        //   <button
        //     type="submit"
        //     className="w-full px-4 py-2 mx-auto font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        //   >
        //     Update Employee
        //   </button>
        // </form>
      }
    </div>
  );
};

export default AddEmployee;
