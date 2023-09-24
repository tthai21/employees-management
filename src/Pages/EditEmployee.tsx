import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux-toolkit/store";
import { useParams } from "react-router-dom";
import AddEmployeeForm from "./Employee/AddEmployeeForm";

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
