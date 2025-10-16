import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">Jarurat Care</h1>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <NavLink to="/patients" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Patients</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
      </nav>
    </header>
  );
}
