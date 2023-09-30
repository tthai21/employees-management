import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userUpdateState } from "../redux-toolkit/userSlice";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { searchUpdateState } from "../redux-toolkit/searchSlice";

const Navbar: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<userResponse | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  console.log("🚀 ~ file: Navbar.tsx:12 ~ isAdmin:", isAdmin);

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
      if (userResponse.role === "Administrator") {
        setIsAdmin(true);
      }
    }
  }, [token, dispatch]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    dispatch(searchUpdateState(searchQuery));
  };

  const SignOut = () => {
    setCurrentUser(null);
    dispatch(userUpdateState(null));
    localStorage.removeItem("token");
    setIsAdmin(false);
    navigate("/");
  };

  return (
    <nav className="px-20 py-2 font-bold text-blue-600 bg-blue-200">
      <div className="flex items-center justify-between">
        {/* Mobile menus */}
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button">
            <svg
              className="w-6 h-6 text-gray-500"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Menus */}
        <ul className="hidden space-x-12 text-xl md:flex ">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          {isAdmin ? (
            <>
              <li className="nav-item">
                <a href="/all-employees">Employees</a>
              </li>
              <li className="nav-item">
                <a href="/add-employees">Add</a>
              </li>
            </>
          ) : null}

          {currentUser ? (
            <li className="nav-item">
              <button onClick={SignOut}>Sign Out</button>
            </li>
          ) : null}
        </ul>
        <div>
          <ul className="flex space-x-12 text-xl">
            {currentUser ? (
              <li className="nav-item">Welcome back {currentUser?.name}!</li>
            ) : null}
          </ul>
        </div>
        <div className="relative flex">
          <input
            type="text"
            placeholder="Search..."
            onChange={onChangeHandler}
            className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSearch}
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
