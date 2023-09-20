import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { employeesSlice } from "./allEmployeeSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    employees: employeesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
