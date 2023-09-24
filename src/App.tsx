import AllEmployees from "./Pages/AllEmployees";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Main from "./Navigation/Main";
import AddEmployee from "./Pages/AddEmployee";
import EditEmployee from "./Pages/EditEmployee";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<LoginPage></LoginPage>}></Route>
          <Route path="/sign-up" element={<SignupPage></SignupPage>}></Route>
          <Route
            path="/all-employees"
            element={<AllEmployees></AllEmployees>}
          ></Route>
          <Route
            path="/add-employees"
            element={<AddEmployee></AddEmployee>}
          ></Route>
          <Route
            path="/edit-employee/:id"
            element={<EditEmployee></EditEmployee>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
