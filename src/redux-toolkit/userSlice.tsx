import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState {
  user: userResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: userState = {
  user: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userUpdateState: (state, action: PayloadAction<userResponse | null>) => {
      state.loading = false;
      state.user = action.payload;
    },
  },
});

export const { userUpdateState } = userSlice.actions;
