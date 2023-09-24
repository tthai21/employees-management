import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { employeesUpdateState } from "./allEmployeeSlice";
import axios from "../utils/axios";
import { AxiosResponse } from "axios";

const FetchAllEmployees = (): void => {
  // const employees: Employee[] = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "johndoe@gmail.com",
  //     mobile: "123456789",
  //     department: "Development",
  //     role: "Administrator",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     email: "janesmith@gmail.com",
  //     mobile: "123456789",
  //     department: "Quality Assurance",
  //     role: "Manager",
  //   },
  //   {
  //     id: 3,
  //     name: "Bob Johnson",
  //     email: "bobjohnson@gmail.com",
  //     mobile: "123456789",
  //     department: "Project Management",
  //     role: "Developer",
  //   },
  // ];
  const dispatch = useDispatch();
  const FETCH_ALL_URL = "Employees/all-employees";
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  useEffect(() => {
    const FetchAll = async () => {
      try {
        const response: AxiosResponse = await axios.get(FETCH_ALL_URL, config);
        dispatch(employeesUpdateState(response.data));
      } catch (error) {
        console.error();
      }
    };
    FetchAll();
  }, []);
};

export default FetchAllEmployees;
