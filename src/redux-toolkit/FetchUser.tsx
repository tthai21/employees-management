import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userUpdateState } from "./userSlice";

const FetchUser = (): void => {
  const fakeUser = {
    name: "Alex",
    email: "alex@gmail",
    mobile: 123456789,
    department: "Development",
    role: "Administrator",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userUpdateState(fakeUser));
  });
};

export default FetchUser;
