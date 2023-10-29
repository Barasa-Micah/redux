import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{configureStore} from '@reduxjs/toolkit'; //Allows you to create your store so easily
import { Provider } from 'react-redux'; //Determine which component should have access to the store 
import userReducer from './features/user';
import themeReducer from './features/theme';

const store = configureStore({
  //Passing a collection of reducers that will be used
  reducer: {
    user: userReducer,
    theme: themeReducer
  },// A function that takes in some information about a current state  and takes an action about the same state that should be performed on the state then returns a new value of the state
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to   start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
