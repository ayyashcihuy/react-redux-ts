import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { App } from "./components/app";
import { reducers } from "./reducer";

const store = createStore(reducers, applyMiddleware(thunk));

// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
