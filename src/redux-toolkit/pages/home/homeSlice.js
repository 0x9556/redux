import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: true,
    cart: []
}

export const getData = createAsyncThunk(
    "home/getData",
    async () => {
        const response = await fetch("https://course-api.com/react-useReducer-cart-project")
        const data = await response.json()
        return data
    }
)

const homeSlice = createSlice({
    name: "home",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getData.pending, state => {
                state.isLoading = true
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.isLoading = false
                state.cart = action.payload
            })
            .addCase(getData.rejected, state => {
                state.isLoading = false
            })
    }

})



export default homeSlice.reducer


// [getData.pending]: state => {
//     state.isLoading = true
// },
// [getData.fulfilled]: (state, action) => {
//     console.log(action.payload)
//     state.isLoading = false
//     state.banner =  action.payload
// },
// [getData.rejected]: state => {
//     state.isLoading = false
// }