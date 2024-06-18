import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ScheduleAbstractsPage from './pages/ScheduleAbstractsPage';
import PracticalInformationsPage from './pages/PracticalInformationsPage';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RegistrationPage from './pages/RegistrationPage';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/schedule-abstracts" element={<ScheduleAbstractsPage/>} />
        <Route path="/practical-info" element={<PracticalInformationsPage/>} />
        <Route path="/registration" element={<RegistrationPage/>} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
