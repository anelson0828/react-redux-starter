import React from 'react';
import './App.css';
import Homepage from './Homepage'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Homepage/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
