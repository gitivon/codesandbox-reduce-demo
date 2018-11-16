import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./store/reducer";
import "./styles.css";

let store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Hello />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
