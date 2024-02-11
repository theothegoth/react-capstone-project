import React from 'react';
import { Routes,Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </div>
  );
}

export default App;
