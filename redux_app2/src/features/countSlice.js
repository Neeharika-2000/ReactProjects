import { createSlice } from '@reduxjs/toolkit'


let initialState = {
  count: 0
}

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    incremetCount: (state, action) => {
     state.count++;
    },
    decrementCount: (state, action) => {
       state.count--;
    },
    resetCount: (state, action) => {
        state.count = 0;
    }
  }
})

export default countSlice.reducer
export const { incremetCount, decrementCount, resetCount } = countSlice.actions