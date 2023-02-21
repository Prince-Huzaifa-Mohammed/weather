import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../Redux/features/weatherSlice";
import userReducer from "../Redux/features/userSlice";
import errorReducer from "../Redux/features/errorSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    user: userReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
