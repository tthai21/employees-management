import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState {
  user: user | null;
  loading: boolean;
  error: string | null;
}

const initialState: userState = {
  user: {
    name: "Alex",
    email: "alex@gmail",
    mobile: "123456789",
    department: "Development",
    role: "Administrator",
  },
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userUpdateState: (state, action: PayloadAction<user>) => {
      state.loading = false;
      state.user = action.payload;
    },
  },
});

export const { userUpdateState } = userSlice.actions;
