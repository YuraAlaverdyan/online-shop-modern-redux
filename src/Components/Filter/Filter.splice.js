import { createSlice } from "@reduxjs/toolkit"

const state = {
    currentFilter:"All",
    categories: ["All","books", "clothes", "Tech"]
}

const FilterSlice = createSlice({
    name:"FilterSlice",
    initialState:state,
    reducers: {
        changeFilter:(state, action) => {
            state.currentFilter = action.payload
        }
    }
})

export default FilterSlice.reducer

export const {changeFilter} = FilterSlice.actions