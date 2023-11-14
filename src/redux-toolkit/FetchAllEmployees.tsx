import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { employeesUpdateState } from "./allEmployeeSlice";
import { AxiosResponse } from "axios";
import axios from "../utils/axios";

const FetchAllEmployees = (): void => {

  const dispatch = useDispatch();
  const FETCH_ALL_URL = "/Employees/all-employees";
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
