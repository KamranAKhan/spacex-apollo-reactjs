import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Launches from './components/Launches/Launches';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rockets/Rockets';
import Ships from './components/Ships/Ships';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>          

          <Route path="launches" element={<Launches />}></Route>
          <Route path="launches/launchId" element={<h2>Hello from Launches Details</h2>}></Route>

          <Route path="missions" element={<Missions />}></Route>
          <Route path="missions/:missionId" element={<h2>Hello from Mission Details</h2>}></Route>

          <Route path="rockets" element={<Rockets/>}></Route>
          <Route path="rockets/rocketId" element={<h2>Hello from Rocket Details</h2>}></Route>

          <Route path="ships" element={<Ships />}></Route>
          <Route path="ships/shipId" element={<h2>Hello from Ship Details</h2>}></Route>
        </Route>
        <Route path="*" element={<h2>Page Not Found</h2>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
