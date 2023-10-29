import {createSlice} from '@reduxjs/toolkit'; //Allows you to create a reducer in a very easy way. Makes it easy to chabge stuff and access the


const initialStateValue = {name: "", age: 0, email: ''}


export const userSlice = createSlice({
    name: 'user',
    initialState: {value: initialStateValue},
    reducers: {
        login:(state, action) =>{
            state.value = action.payload
        },

        logout: (state) => {
            state.value = initialStateValue;
        },
    },
});

export const {login, logout} = userSlice.actions; 
// Accessing the actions that we created 

export  default userSlice.reducer; 




