import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";


const feeling = (state = 0, action) => {
    // Always check the action.type before changing our value
    if (action.type === 'SET_FEELING_TODAY') {
        // This changes the value of our reducer
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return 0;
    }
    // Value of our reducer remains unchanged
    return state;
}


const storeInstance = createStore(
    combineReducers(
        {
            feeling,
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
