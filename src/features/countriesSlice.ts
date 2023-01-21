import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../interfaces/interfaces";

interface CountryState {
  value: Country[] | null;
}
const initialState: CountryState = {
  value: null,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    updateCountries: (state, action: PayloadAction<Country[]>) => {
      state.value = action.payload;
    },
  },
});

export const { updateCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
