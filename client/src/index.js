import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
// import { Provider } from "react-redux";
// import { applyMiddleware, createStore} from 'redux';
// import thunk from 'redux-thunk';   //middleware that enable asynchronous with redux

//dev tools
// import { composeWithDevTools } from "redux-devtools-extension";
// import logger from 'redux-logger';

// const store = createStore(
//   rootReducer, composeWithDevTools()
// )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  <div>
    <App />
  </div>
  // </Provider>
);
