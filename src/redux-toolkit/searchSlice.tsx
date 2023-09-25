import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface searchState {
  search: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: searchState = {
  search: null,
  loading: false,
  error: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchUpdateState: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.search = action.payload;
    },
  },
});

export const { searchUpdateState } = searchSlice.actions;
