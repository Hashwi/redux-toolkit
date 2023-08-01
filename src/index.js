import React from 'react';
import { createRoot } from 'react-dom/client'; // Update the import here
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './components/features/user'; // Make sure 'useReducer' is exported correctly
import themeReducer from './components/features/theme';

const store = configureStore({
  reducer: {
    user: userReducer, // Use the 'userReducer' here, not 'useReducer'
    theme: themeReducer,
  },
});

const root = createRoot(document.getElementById('root')); // Use createRoot from 'react-dom/client'
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
