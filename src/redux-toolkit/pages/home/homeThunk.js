import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getHomeData = createAsyncThunk(
    "getHomeData",
    async () => {
        const response = await axios.get("http://123.207.32.32:8000/home/multidata")
        console.log(response)
        return response.data.data
    }
)

