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
  applications: {
    typeOfVehicle: null,
    plateNumber: null,
    companyName: null,
    contactNo: null,
    position: null,
    address: null,
  },
  photoSetup: null,
};

export const applicationSlide = createSlice({
  name: "application",
  initialState,
  reducers: {
    updateUserSettings: (state, action) => ({
      ...state,
      userSettings: action.payload,
    }),
    updatePhoto: (state, action) => ({
      ...state,
      photoSetup: action.payload,
    }),
    updateApplication: (state, action) => ({
      ...state,
      applications: action.payload,
    }),
  },
});

export const { updateUserSettings, updatePhoto, updateApplication } =
  applicationSlide.actions;
export default applicationSlide.reducer;
