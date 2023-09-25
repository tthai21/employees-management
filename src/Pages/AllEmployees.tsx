import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import NavbarSub from "../Navigation/NavbarSub";
import Employee from "./Employee/Employee";
import EmployeesTable from "./Employee/EmployeesTable";
import FetchAllEmployees from "../redux-toolkit/FetchAllEmployees";
import axios from "../utils/axios";
import { removeEmployeeState } from "../redux-toolkit/allEmployeeSlice";
import { useDispatch } from "react-redux";

const AllEmployees: React.FC = () => {
  const [sort, setSort] = useState<string>("All Employees");
  const [sortEmployees, setSortEmployees] = useState<Employee[] | null>(null);

  // Fetch employees when the component mounts

  FetchAllEmployees();

  // Get employees from the Redux store
  const employees: Employee[] = useSelector(
    (state: RootState) => state.employees.Employees
  );
  const search: string | null = useSelector(
    (state: RootState) => state.search.search
  );

  // Handle change in the select input
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSort(value);
  };

  // Filter employees based on the selected sort
  useEffect(() => {
    const filteredEmployees = () => {
      switch (sort) {
        case "All Employees":
          setSortEmployees(employees);
          break;
        case "Development":
          setSortEmployees(
            employees.filter(
              (e) => e.department == "Development" || e.role == "Development"
            )
          );
          break;
        case "Quality Assurance":
          setSortEmployees(
            employees.filter(
              (e) =>
                e.department == "Quality Assurance" ||
                e.role == "Quality Assurance"
            )
          );
          break;
        case "Infrastructure":
          setSortEmployees(
            employees.filter(
              (e) =>
                e.department == "Infrastructure" || e.role == "Infrastructure"
            )
          );
          break;
        case "Technical Support":
          setSortEmployees(
            employees.filter(
              (e) =>
                e.department == "Technical Support" ||
                e.role == "Technical Support"
            )
          );
          break;
        case "Security":
          setSortEmployees(
            employees.filter(
              (e) => e.department == "Security" || e.role == "Security"
            )
          );
          break;
        case "Project Management":
          setSortEmployees(
            employees.filter(
              (e) =>
                e.department == "Project Management" ||
                e.role == "Project Management"
            )
          );
          break;
        case "Sales and Marketing":
          setSortEmployees(
            employees.filter(
              (e) =>
                e.department == "Sales and Marketing" ||
                e.role == "Sales and Marketing"
            )
          );
          break;
        case "Administrator":
          setSortEmployees(
            employees.filter(
              (e) =>
                e.department == "Administrator" || e.role == "Administrator"
            )
          );
          break;
        case "Manager":
          setSortEmployees(
            employees.filter(
              (e) => e.department == "Manager" || e.role == "Manager"
            )
          );
          break;
        case "Supervisor":
          setSortEmployees(
            employees.filter(
              (e) => e.department == "Supervisor" || e.role == "Supervisor"
            )
          );
          break;
        case "Developer":
          setSortEmployees(
            employees.filter(
              (e) => e.department == "Developer" || e.role == "Developer"
            )
          );
          break;
        case "Technical Help":
          setSortEmployees(
            employees.filter(
              (e) =>
                e.department == "Technical Help" || e.role == "Technical Help"
            )
          );
          break;

        default:
          setSortEmployees(employees);
          break;
      }
    };

    filteredEmployees();
  }, [sort, employees]);

  useEffect(() => {
    const searchEmployee = sortEmployees?.filter((employee) =>
      employeeMatchesSearch(employee, search)
    );
    if (searchEmployee != null) {
      setSortEmployees(searchEmployee);
    }
  }, [search]);

  const employeeMatchesSearch = (employee: user, search: string | null) => {
    // Check if any employee property contains the search query
    if (employee != null && search != null) {
      return (
        employee.name?.toLowerCase().includes(search?.toLowerCase()) ||
        employee.email?.toLowerCase().includes(search?.toLowerCase()) ||
        employee.mobile?.toLowerCase().includes(search?.toLowerCase()) ||
        employee.department?.toLowerCase().includes(search?.toLowerCase()) ||
        employee.role?.toLowerCase().includes(search?.toLowerCase())
      );
    }
  };

  const token: string | null = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const dispatch = useDispatch();

  const RemoveEmployee = async (employee: Employee) => {
    const employeeId = Number(employee.id);

    if (isNaN(employeeId)) {
      console.error("Invalid employee ID format");
      return;
    }

    const REMOVEEMPLOYEE_URL = `/Employees/remove/employeeId?id=${employeeId}`;
    try {
      const response = await axios.post(
        REMOVEEMPLOYEE_URL,
        employeeId.toString(),
        {
          headers,
        }
      );
      dispatch(removeEmployeeState(employee));
      alert(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavbarSub handleChange={handleChange}></NavbarSub>
      <div className="p-4 mx-16 mt-10 rounded-md">
        <EmployeesTable></EmployeesTable>
        {sortEmployees?.map((employee) => (
          <React.Fragment key={employee.id}>
            <Employee
              employee={employee}
              RemoveEmployee={RemoveEmployee}
            ></Employee>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default AllEmployees;
