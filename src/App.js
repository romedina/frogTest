import React from 'react';
import './App.css';
import { Body } from './Components/body';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Auth';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Body />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
