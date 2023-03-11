import { createSlice } from "@reduxjs/toolkit";
// import { genesisSlice } from "./api.slice";

const initialState = {
  userSettings: {
    firstName: null,
    middleName: null,
    lastName: null,
    birthdate: null,
    applicationType: null,
    address: null,
    civilStatus: null,
    gender: null,
  },
};

export const applicationSlide = createSlice({
  name: "application",
  initialState,
  reducers: {
    updateUserSettings: (state, action) => ({
      ...state,
      userSettings: action.payload,
    }),
  },
});

export const { updateUserSettings } = applicationSlide.actions;
export default applicationSlide.reducer;
