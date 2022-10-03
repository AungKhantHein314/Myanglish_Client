import { configureStore } from "@reduxjs/toolkit";

// Reducers

import noteReducer from "./features/noteSlice";
import userReducer from "./features/userSlice";
import translateReducer from "./features/translateSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    notes: noteReducer,
    translate: translateReducer
  },
  devTools: true, // false
});