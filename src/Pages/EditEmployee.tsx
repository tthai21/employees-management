import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import { useParams } from "react-router-dom";
import AddEmployeeForm from "./Employee/AddEmployeeForm";
import { AxiosResponse } from "axios";
import axios from "../utils/axios";

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
  const token: string | null = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, 
  };
  const UPDATEEMPLOYEE_URL = "/Employees/edit/employeeId";
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response: AxiosResponse = await axios.post(
        UPDATEEMPLOYEE_URL,
        JSON.stringify(employee),
        { headers }
      );
      alert(response.data);
    } catch (error) {
      console.log(error);
    }

    console.log(`Edited employee: ${employee.name} `, employee);
  };

  return (
    <div className="max-w-md p-4 mx-auto mt-20 border rounded shadow-lg t-20">
      {employee ? (
        <AddEmployeeForm
          title="Edit Employee"
          employee={employee}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          button="Edit Employee"
        ></AddEmployeeForm>
      ) : null}
    </div>
  );
};

export default AddEmployee;
