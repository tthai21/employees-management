import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { employeesUpdateState } from "./allEmployeeSlice";

const FetchAllEmployees = (): void => {
  const employees: Employee[] = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
      mobile: 123456789,
      department: "Development",
      role: "Administrator",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@gmail.com",
      mobile: 123456789,
      department: "Quality Assurance",
      role: "Manager",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bobjohnson@gmail.com",
      mobile: 123456789,
      department: "Project Management",
      role: "Developer",
    },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(employeesUpdateState(employees));
  });
};

export default FetchAllEmployees;
