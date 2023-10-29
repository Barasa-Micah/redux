import {createSlice} from '@reduxjs/toolkit'; //Allows you to create a reducer in a very easy way. Makes it easy to chabge stuff and access the


const initialStateValue = '';


export const themeSlice = createSlice({
    name: 'theme',
    initialState: {value: initialStateValue},
    reducers: {
        changeColor:(state, action) =>{
            state.value = action.payload
        },
    },
});

export const {changeColor} = themeSlice.actions; 
// Accessing the actions that we created 

export  default themeSlice.reducer; 




