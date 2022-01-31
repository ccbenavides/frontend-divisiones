import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const fetchDivision = async () => {
    try {
        const response = await axios.get(
            `http://143.244.181.122/api/divisions`
        )
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}

export const fetchDivisonByAny = createAsyncThunk('divisionSlice/fetchDivisonByAny',
    async (_, { rejectWithValue }) => {
        try {
            return await fetchDivision()
            
        } catch (error) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error.response.data)
        }
    }
)

const initalState = {
    data: [],  
    status : '',
    error: null,
    search : '',
    columnSearch : ''
}

const divisionDataSlice = createSlice({
    name: 'divisionData',
    initialState: initalState,
    reducers : {

    },
    extraReducers: {
        [fetchDivisonByAny.pending]: (state, _) => {
            state.status = 'loading'
        },

        [fetchDivisonByAny.fulfilled]: (state, action) => {
            action.payload.forEach( (division, index) => {
                state.data.push({ ...division, key : 'element_' + index })
            })
            state.status = 'success'
        },

        [fetchDivisonByAny.rejected]: (state, action) => {
            state.status = 'error'
            if (action.payload) {
                state.error = action.payload.status_message
            } else {
                state.error = action.error
            }
        }
    }
})

export const selectdivisionData = state => state.divisionData 
export default divisionDataSlice.reducer 