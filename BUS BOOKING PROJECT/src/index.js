
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './DataContext';
import App from './App';

ReactDOM.render(
  <Router>
    <DataProvider>
      <App />
    </DataProvider>
  </Router>,
  document.getElementById('root')
);
