import React from 'react';
import logo from './logo.svg';
import Reaact from "./react"
import Acordion from './Acordion';
import './App.css'
import Titlle from './Titlle';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Profil from './Components/Profil/Profil';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">    
          <Header/>
          <Sidebar/>
          <div className='content'>
          <Routes>
            <Route path="/profil" element={<Profil/>} />
            <Route path="/dialogs" element={<Dialogs/>} />
          </Routes>
            {/* <Profil/> 
           <Dialogs/> */}
          </div >
      </div>
    </BrowserRouter>
  );
}

export default App;
