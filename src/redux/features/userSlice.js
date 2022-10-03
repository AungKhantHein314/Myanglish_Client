import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import SERVER_URL from "./../../URLs/SERVER_URL";

const initialState = {};

// Register
export const register = createAsyncThunk("user/register", async (newUser) => {
    const { data } = await axios.post(`${SERVER_URL}/user`, newUser);
    localStorage.setItem("cryptedMail", data.cryptedMail);
    localStorage.setItem("token", data.token)
    return data;
});

// Verify
export const verify = createAsyncThunk("user/verify", async (mail) => {
    const body = { key: "qwerty" };
    const { data } = await axios.post(`${SERVER_URL}/verify/${mail}`, body);
    return data;
});

// resend verify
export const reverify = createAsyncThunk("user/reverify", async (mail) => {
    const { data } = await axios.post(`${SERVER_URL}/verify/sendMail/${mail}`);
    return data;
});

// Login
export const login = createAsyncThunk("user/login", async (loginData) => {
    const { data } = await axios.post(`${SERVER_URL}/user/login`, loginData);
    return data;
});

// Get Profile
export const getProfile = createAsyncThunk(
    "user/getProfile",
    async (thunkAPI) => {
        const token =
            typeof window !== "undefined" && localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const { data } = await axios.get(`${SERVER_URL}/user/profile`, config);
        return data;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            typeof window !== "undefined" &&
                localStorage.setItem("token", action.payload.token);
            return action.payload;
        },
        [getProfile.fulfilled]: (state, action) => {
            return action.payload;
        },
        [login.fulfilled]: (state, action) => {
            typeof window !== "undefined" &&
                localStorage.setItem("token", action.payload.token);
            return action.payload;
        },
        [verify.fulfilled]: (state, action) => {
            return action.payload;
        },
        [reverify.fulfilled]: (state, action) => {
            return action.payload;
        }
    },
});

const { reducer } = userSlice;

export default reducer;