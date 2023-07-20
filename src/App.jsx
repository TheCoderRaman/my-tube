import './App.css';
import React from 'react';
import Web from './Router/Web';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
          <Web />
        </BrowserRouter>
    )
}

export default App;