import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApiSlice, genesisSlice } from "./api.slice";
import applicationReducer from "./application";

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    // Add the generated reducer as a specific top-level slice
    [genesisSlice.reducerPath]: genesisSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      genesisSlice.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
