import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../../Interfaces/weather";

interface WeatherState {
  value: WeatherData | null;
}

const initialState: WeatherState = {
  value: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeatherData: (state, action: PayloadAction<WeatherData>) => {
      state.value = action.payload;
    },
  },
});

export const { addWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;
