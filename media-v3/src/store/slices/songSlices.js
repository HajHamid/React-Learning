import { createSlice } from "@reduxjs/toolkit"
import { reset } from "../actions"

const songSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload)
        },
        removeSong(state, aciton) {
            const index = state.indexOf(aciton.payload)
            state.splice(index, 1)
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return []
        })
    }
})

export const { addSong, removeSong } = songSlice.actions
export const songReducer = songSlice.reducer