import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";
import { userUpdateState } from "./userSlice";
import { useDispatch } from "react-redux";

const GetUser = () => {
  const [user, setUser] = useState<userResponse | null>(null);
  const dispatch = useDispatch();
  const token: string | null = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decodedToken: DecodedToken = jwtDecode(token);
      const userResponse: userResponse = {
        name: decodedToken.unique_name,
        email: decodedToken.email,
        role: decodedToken.role,
      };
      dispatch(userUpdateState(userResponse));
      setUser(userResponse);
    }
  }, [token, dispatch]);

  return user;
};

export default GetUser;
