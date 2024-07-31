import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GDDLogo from './GDD_logo.png';
import TotalAssault from './components/TotalAssaultPage/TotalAssault';
import RaidStudentList from './components/TotalAssaultPage/RaidStudentList'; // Import RaidStudentList

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<img src={GDDLogo} alt="GDD Logo" style={{ paddingTop: '2.5%' }} />} /> {/* Home Page */}
            <Route path="/TotalAssault" element={<TotalAssault />} /> 
            <Route path="/TotalAssault/:bossName" element={<TotalAssault />} />
            <Route path="/GrandAssault" element={null} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}