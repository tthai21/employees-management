import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployeeState } from "../redux-toolkit/allEmployeeSlice";
import AddEmployeeForm from "./Employee/AddEmployeeForm";
import  axios  from "../utils/axios";

const AddEmployee: React.FC = () => {
  const dispatch = useDispatch();
  const [employee, setEmployee] = useState<Employee>({
    id: null,
    name: "",
    email: "",
    mobile: "",
    department: "Development",
    role: "Administrator",
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
  const ADDEMPLOYEE_URL = "/Employees/add-employee";
  const token: string | null = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Use 'Bearer' before the token
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        ADDEMPLOYEE_URL,
        JSON.stringify(employee),
        { headers }
      );
      // Reset the form fields after submission
      setEmployee({
        id: null,
        name: "",
        email: "",
        mobile: "",
        department: "Development",
        role: "Administrator",
      });
      const id = Math.round(Math.random());
      dispatch(addEmployeeState({ ...employee, id: id }));
      alert(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto mt-4 border rounded shadow-lg t-20">
      <AddEmployeeForm
        title="Add New Employee"
        employee={employee}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        button="Add New Employee"
      ></AddEmployeeForm>
    </div>
  );
};

export default AddEmployee;
