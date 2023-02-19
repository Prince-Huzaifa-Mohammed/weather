import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../Redux/features/weatherSlice";
import userReducer from "../Redux/features/userSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
