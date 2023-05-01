import { createSlice } from '@reduxjs/toolkit'

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    value: true
  },
  reducers: {
    On: state => {
      state.value = true
    },
    Off: state => {
        state.value = false
    }
  }
})


export const { On, Off } = navSlice.actions

export default navSlice.reducer

export const navValue = state => state.nav.value