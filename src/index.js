import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './store/reducer';
import { ThemeProvider } from 'styled-components';
import './styles.css';
import { Theme } from './theme';

let store = createStore(reducers);

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <Hello />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
