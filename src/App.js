import React from 'react';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './redux/reducers';

// Components
import SongList from './components/SongList';

// Set store
const store = createStore(allReducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Songs(with the help of Redux)</h1>
        <SongList />
      </div>
    </Provider>
  );
}

export default App;
