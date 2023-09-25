import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface employeesState {
  Employees: Employee[];
  loading: boolean;
  error: string | null;
}

const initialState: employeesState = {
  Employees: [],
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
    removeEmployeeState: (state, action: PayloadAction<Employee>) => {
      state.loading = false;
      state.Employees = state.Employees.filter(
        (e) => e.id != action.payload.id
      );
    },
  },
});

export const { employeesUpdateState, addEmployeeState, removeEmployeeState } =
  employeesSlice.actions;
