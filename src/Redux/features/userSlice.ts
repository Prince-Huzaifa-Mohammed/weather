import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  country: string;
  email: string;
}

interface UserState {
  value: User | null;
}

const initialState: UserState = {
  value: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
