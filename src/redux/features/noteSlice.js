import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import SERVER_URL from "./../../URLs/SERVER_URL";

const initialState = {};

// save favourite
export const saveFavourite = createAsyncThunk(
    "note/saveFavourite",
    async () => {
        const token =
            typeof window !== "undefined" && localStorage.getItem("token");
        const lastHistoryId =
            typeof window !== "undefined" && localStorage.getItem("lastHistoryId");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const { data } = await axios.post(`${SERVER_URL}/history/favourite/${lastHistoryId}`, {}, config);
        return data;
    }
);

// save suggestions
export const saveSuggestion = createAsyncThunk(
    "note/saveSuggestion",
    async (request) => {
        console.log(request);
        const { data } = await axios.post(`${SERVER_URL}/suggestion/`, request);
        return data;
    }
);

// Get Favourites
export const getFavourites = createAsyncThunk(
    "user/getFavourites",
    async () => {
        const token =
            typeof window !== "undefined" && localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const { data } = await axios.get(`${SERVER_URL}/history/favourites`, config);
        return data;
    }
);

// Get Recents
export const getRecents = createAsyncThunk(
    "user/getRecents",
    async () => {
        const token =
            typeof window !== "undefined" && localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const { data } = await axios.get(`${SERVER_URL}/history/recents`, config);
        return data;
    }
);

const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {},
    extraReducers: {
        [getFavourites.fulfilled]: (state, action) => {
            return action.payload;
        },
        [saveFavourite.fulfilled]: (state, action) => {
            return action.payload;
        },
        [saveSuggestion.fulfilled]: (state, action) => {
            return action.payload;
        },
        [getRecents.fulfilled]: (state, action) => {
            return action.payload;
        }
    },
});

const { reducer } = noteSlice;

export default reducer;