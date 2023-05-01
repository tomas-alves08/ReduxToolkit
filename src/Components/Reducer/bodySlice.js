import { createSlice } from '@reduxjs/toolkit'

export const bodySlice = createSlice({
  name: 'body',
  initialState: { value: 40 },
  reducers: {
    Increment: state => {
      state.value += 2
    },
    Decrement: state => {
        state.value -= 2
    }
  }
})

export const { Increment, Decrement } = bodySlice.actions

export default bodySlice.reducer

export const bodyValue = state => state.body.value
