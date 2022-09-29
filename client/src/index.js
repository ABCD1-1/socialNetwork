import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';   //middleware that enable asynchronous with redux
import rootReducer from './reducers';

//dev tools (not useful in prod)
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
