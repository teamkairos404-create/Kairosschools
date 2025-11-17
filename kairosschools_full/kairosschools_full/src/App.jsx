import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Competency from './pages/Competency.jsx';
import Pedagogy from './pages/Pedagogy.jsx';
import EContent from './pages/EContent.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Reports from './pages/Reports.jsx';

export default function App(){
  return(
    <BrowserRouter>
      <Header/>
      <div style={{padding:'20px'}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/competency' element={<Competency/>}/>
          <Route path='/pedagogy' element={<Pedagogy/>}/>
          <Route path='/econtent' element={<EContent/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/reports' element={<Reports/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
