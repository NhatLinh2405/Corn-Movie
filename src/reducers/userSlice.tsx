import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
	},
	reducers: {
		login: (state, action): void => {
			state.user = action.payload;
		},
		logout: (state): void => {
			state.user = null;
		},
	},
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
