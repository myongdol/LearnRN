import { createSlice } from "@reduxjs/toolkit";



const favoritesSLice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            state.id.splice(state.ids.indexOf(action.payload.id), 1);
        },
    }
});


export const addFavorite = favoritesSLice.actions.addFavorite;
export const removeFavorite = favoritesSLice.actions.removeFavorite;
export default favoritesSLice.reducer;