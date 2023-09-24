import React from "react";

interface NavbarSubProps {
  handleChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}
const NavbarSub: React.FC<NavbarSubProps> = ({ handleChange }) => {
  return (
    <nav className="px-20 py-2 font-bold text-blue-100 bg-blue-900">
      <div className="flex items-center justify-between">
        <ul className="flex space-x-12 text-xl">
          <li className="flex justify-center text-center my-auto">
            <p>Sort by</p>
          </li>
          <li className="nav-item text-blue-900 my-auto">
            <select
              id="department"
              name="department"
              // value={}
              placeholder="Department"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="All Employees">All Employees</option>
              <option value="Development">Development</option>
              <option value="Quality Assurance">Quality Assurance</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Security">Security</option>
              <option value="Project Management">Project Management</option>
              <option value="Sales and Marketing">Sales and Marketing</option>
              <option value="Administrator">Administrator</option>
              <option value="Manager">Manager</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Developer">Developer</option>
              <option value="Technical Help">Technical Help</option>
            </select>
          </li>
        </ul>
        <div>
          <ul className="flex space-x-12 text-xl"></ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSub;
