import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
    name: 'name',
    initialState: {
        value: 'Tomas'
    },
    reducers: {
        firstName: state => {
            state.value = "Tomas"
        },
        fullName: state => {
            state.value = "Tomas Alves de Souza"
        }
    }

})

export const {firstName, fullName} = nameSlice.actions

export default nameSlice.reducer

export const nameValue = state => state.name.value