import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface IUser {
	user: {
		email: string;
	} | null;
}

const initialState: IUser = {
	user: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
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
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
