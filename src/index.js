import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";


const feeling = (state = 'Select From Values', action) => {
    // Always check the action.type before changing our value
    if (action.type === 'SET_FEELING_TODAY') {
        // This changes the value of our reducer
        return action.payload;
    }else if (action.type === 'CLEAR_FORM') {
        return 'Select From Values';
    }
    // Value of our reducer remains unchanged
    return state;
}

const understand = (state = 'Select From Values', action) => {
    // Always check the action.type before changing our value
    if (action.type === 'SET_UNDERSTANDING') {
        // This changes the value of our reducer
        return action.payload;
    }else if (action.type === 'CLEAR_FORM') {
        return 'Select From Values';
    }
    // Value of our reducer remains unchanged
    return state;
}

const support = (state = 'Select From Values', action) => {
    // Always check the action.type before changing our value
    if (action.type === 'SET_SUPPORT') {
        // This changes the value of our reducer
        return action.payload;
    }else if (action.type === 'CLEAR_FORM') {
        return 'Select From Values';
    }
    // Value of our reducer remains unchanged
    return state;
}

const comments = (state = '', action) => {
    // Always check the action.type before changing our value
    if (action.type === 'SET_COMMENT') {
        // This changes the value of our reducer
        return action.payload;
    }else if (action.type === 'CLEAR_FORM') {
        return '';
    }
    // Value of our reducer remains unchanged
    return state;
}


const storeInstance = createStore(
    combineReducers(
        {
            feeling,
            understand,
            support,
            comments,
            // Other reducers go here
        }
    ),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
