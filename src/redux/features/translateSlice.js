import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import SERVER_URL from "./../../URLs/SERVER_URL";

const initialState = {};

// translate
export const translateMyanmarToMyanglish = createAsyncThunk(
    "translate/translateMyanmarToMyanglish",
    async (request) => {
        const { data } = await axios.post(`${SERVER_URL}/translate/mytomg`, request);
        localStorage.setItem("lastHistoryId", data.historyId)
        return data;
    }
);

const translateSlice = createSlice({
    name: "translate",
    initialState,
    reducers: {},
    extraReducers: {
        [translateMyanmarToMyanglish.fulfilled]: (state, action) => {
            return action.payload;
        }
    },
});

const { reducer } = translateSlice;

export default reducer;