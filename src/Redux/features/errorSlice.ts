import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Error {
  value: string;
}

// interface UserState {
//   value: User | null;
// }

const initialState: Error = {
  value: "",
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    addError: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    removeError: (state) => {
      state.value = "";
    },
  },
});

export const { addError, removeError } = errorSlice.actions;

export default errorSlice.reducer;
