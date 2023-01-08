import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CryptoRsa from './CryptoRsa';
import CryptoAffine from './CryptoAffine';
import CryptoHill from './CryptoHill';
import Appbar from './Appbar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='App'>

    <Router>
      <Appbar />
      <Routes>
        <Route exact path='/Rsa' element={<CryptoRsa />} />
        <Route exact path='/Affine' element={<CryptoAffine />} />
        <Route exact path='/Hill' element={<CryptoHill />} />
      </Routes>
    </Router>
  </div>
);

reportWebVitals();
