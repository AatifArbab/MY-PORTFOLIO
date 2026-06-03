import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Navbar ka reference pakadne ke liye taake pata chale click kahan hua
  const navbarRef = useRef(null);

  // Bahar click detect karne ka logic
  useEffect(() => {
    function handleClickOutside(event) {
      if (isMenuOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <style>{`
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: #38bdf8;
        }

        /* Hamburger Icon CSS */
        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 5px;
        }
        .menu-toggle span {
          width: 25px;
          height: 3px;
          background-color: white;
          border-radius: 2px;
          transition: 0.3s;
        }

        /* Mobile Responsive Settings */
        @media (max-width: 768px) {
          .menu-toggle {
            display: flex;
          }

          .nav-links {
            display: ${isMenuOpen ? 'flex' : 'none'} !important;
            flex-direction: column;
            position: absolute;
            top: 60px; /* Navbar ke end se neche khule */
            right: 20px;
            background: #111;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.5);
            width: 150px;
            gap: 15px !important;
            text-align: right;
            z-index: 999;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <nav ref={navbarRef} style={styles.navbar} className="custom-navbar">
        {/* TEXT HATA KAR LOGO IMAGE LAGAI HAI */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/favicon1.png" 
            alt="Logo" 
            style={styles.logoImg} 
          />
        </a>

        {/* Hamburger Menu Icon */}
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Links Dropdown */}
        <div style={styles.links} className="nav-links">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </nav>
    </>
  );
}

/* STYLES */
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#111",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.5)"
  },

  // Image logo ko styling di hai taake height set rahe
  logoImg: {
    height: "60px",      /* Aap is height ko kam ya zyada kar sakte hain */
    width: "auto",        /* Aspect ratio sahi rakhne ke liye */
    objectFit: "contain"
  },

  links: {
    display: "flex",
    gap: "20px"
  }
};