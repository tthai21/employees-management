import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { employeesSlice } from "./allEmployeeSlice";
import { searchSlice } from "./searchSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    employees: employeesSlice.reducer,
    search: searchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
