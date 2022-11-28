import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const getHomeData = createAsyncThunk(
    "getHomeData",
    async()
)