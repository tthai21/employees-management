import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userUpdateState } from "../redux-toolkit/userSlice";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

interface NavbarProps {
  // onSignIn: () => void;
  // onSignOut: () => void;
  // onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const query = event.target.value;
  //   onSearch(query);
  // };
  const [currentUser, setCurrentUser] = useState<userResponse | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      setCurrentUser(userResponse);
    }
  }, [token, dispatch]);

  const SignIn = () => {};

  const SignOut = () => {
    setCurrentUser(null);
    dispatch(userUpdateState(null));
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="px-20 py-2 font-bold text-blue-600 bg-blue-200">
      <div className="flex items-center justify-between">
        <ul className="flex space-x-12 text-xl">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/all-employees">All Employees</a>
          </li>
          <li className="nav-item">
            <a href="/add-employees">Add Employee</a>
          </li>
          {currentUser ? (
            <li className="nav-item">
              <button onClick={SignOut}>Sign Out</button>
            </li>
          ) : (
            <li className="nav-item">
              <button onClick={SignIn}>Sign In</button>
            </li>
          )}
        </ul>
        <div>
          <ul className="flex space-x-12 text-xl">
            {currentUser ? (
              <li className="nav-item">
                Welcome back {currentUser?.name} ({currentUser?.role}) !!!
              </li>
            ) : null}
          </ul>
        </div>
        <div className="relative flex">
          <input
            type="text"
            placeholder="Search..."
            // onChange={handleSearch}
            className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => {}}
            className="px-4 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
