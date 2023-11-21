import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'form',
    initialState: {
        searchTerm: '',
        carsList: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            state.carsList.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            })
        },
        removeCar(state, action) {
            const updatedCars = state.carsList.filter((car) => {
                return car.id !== action.payload
            })

            state.carsList = updatedCars
        }
    }
})


export const { addCar, removeCar, changeSearchTerm } = carSlice.actions
export const carReducer = carSlice.reducer