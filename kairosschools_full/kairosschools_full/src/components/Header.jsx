import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <header style={{padding:'20px', background:'#eee', display:'flex', justifyContent:'space-between'}}>
      <div style={{fontSize:'24px', fontWeight:'bold'}}>Kairos</div>
      <nav style={{display:'flex', gap:'20px'}}>
        <Link to="/">Home</Link>
        <Link to="/competency">Competency</Link>
        <Link to="/pedagogy">Pedagogy</Link>
        <Link to="/econtent">E-Content</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
