import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();
  const navbarRef = useRef(null);

  useEffect(() => {
    // Collapse the menu when the route changes
    setIsCollapsed(true);
  }, [location]);

  useEffect(() => {
    // Close the menu when clicking outside of it
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsCollapsed(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fix: Use location.pathname instead of window.location.pathname
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" ref={navbarRef}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/skills') ? 'active' : ''}`} to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/experience') ? 'active' : ''}`} to="/experience">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/projects') ? 'active' : ''}`} to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
