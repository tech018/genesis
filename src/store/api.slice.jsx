import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_AUTH_URI,
    prepareHeaders: (headers) => {
      headers.set("app-x-api-key", `${process.env.REACT_APP_X_API_KEY}`);
    },
  }),
  tagTypes: ["Quotes"],
  endpoints: () => ({}),
});

export const genesisSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_GENESIS_URI,
    prepareHeaders: (headers) => {
      const token = localStorage?.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("app-x-api-key", `${process.env.REACT_APP_X_API_KEY}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Quotes"],
  endpoints: () => ({}),
});
