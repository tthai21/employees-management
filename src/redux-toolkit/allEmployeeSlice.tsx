import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface employeesState {
  Employees: Employee[];
  loading: boolean;
  error: string | null;
}

const initialState: employeesState = {
  Employees: [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
      mobile: "123456789",
      department: "Development",
      role: "Administrator",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@gmail.com",
      mobile: "123456789",
      department: "Quality Assurance",
      role: "Manager",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bobjohnson@gmail.com",
      mobile: "123456789",
      department: "Project Management",
      role: "Developer",
    },
  ],
  loading: false,
  error: null,
};

export const employeesSlice = createSlice({
  name: "Employees",
  initialState,
  reducers: {
    employeesUpdateState: (state, action: PayloadAction<Employee[]>) => {
      state.loading = false;
      state.Employees = action.payload;
    },
    addEmployeeState: (state, action: PayloadAction<Employee>) => {
      state.loading = false;
      state.Employees = [...state.Employees, action.payload];
    },
  },
});

export const { employeesUpdateState, addEmployeeState } =
  employeesSlice.actions;
