import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["BENZ","Hyunda", "Bentley"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers : {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer