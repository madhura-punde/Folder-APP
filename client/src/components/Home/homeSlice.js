import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  documentsResponse: [],
  error: "",
};

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    isLoading: (state) => {
      state.loading = true;
    },
    FILE_Fetch_SUCCEEDED: (state, action) => {
      console.log("FILE_Fetch_SUCCEEDED", action.payload);
      state.loading = false;
      state.documentsResponse = action.payload;
    },
    File_Fetch_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { FILE_Fetch_SUCCEEDED, File_Fetch_FAILURE, isLoading } =
  fileSlice.actions;

export default fileSlice.reducer;
