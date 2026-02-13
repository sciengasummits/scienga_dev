import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo2.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const linkStyle = {
    textDecoration: 'none',
    color: '#334155', // Slate 700 - slightly softer than pure black
    fontSize: '14px',
    fontWeight: '700', // Bolder
    textTransform: 'uppercase',
    letterSpacing: '0.8px', // More spacing
    position: 'relative',
    cursor: 'pointer',
    padding: '8px 0',
    transition: 'color 0.2s ease'
  }

  const navLinks = [
    { name: 'HOME', path: '/', hash: '#home' },
    { name: 'ABOUT US', path: '/', hash: '#about' },
    { name: 'UPCOMING EVENTS', path: '/', hash: '#meetings' },
    { name: 'SPONSORSHIP EXHIBITORS', path: '/sponsorship' },
    {
      name: 'POLICIES',
      path: '#',
      subLinks: [
        { name: 'Terms & Conditions', path: '/terms' },
        { name: 'Refund & Cancellations', path: '/refund-cancellation' },
        { name: 'Privacy Policy', path: '/privacy' }
      ]
    },
    { name: 'CONTACT US', path: '/contact' },
    { name: 'REGISTER NOW', path: '/register', isButton: true }
  ];

  const handleLinkClick = (hash) => {
    setIsMenuOpen(false);
    setDropdownOpen(false);
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header style={{
      background: '#ffffff',
      boxShadow: '0 4px 20px -5px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
      height: '100px', // Slightly more compact
      display: 'flex',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      borderBottom: '1px solid #f1f5f9'
    }}>
      <div className="container nav-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1400px',
        padding: '0 2rem',
        height: '100%',
        margin: '0 auto',
        width: '100%'
      }}>
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Scienga Summits" style={{ height: '90px', objectFit: 'contain', marginTop: '10px' }} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hide-mobile" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {navLinks.map((link, index) => {
            if (link.isButton) {
              return (
                <Link
                  key={index}
                  to={link.path}
                  style={{
                    padding: '12px 24px',
                    background: 'linear-gradient(135deg, var(--primary, #2563eb) 0%, #1d4ed8 100%)',
                    color: 'white',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    letterSpacing: '0.3px',
                    boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2), 0 2px 4px -1px rgba(37, 99, 235, 0.1)',
                    transition: 'all 0.3s ease',
                    marginLeft: '15px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 15px -3px rgba(37, 99, 235, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 6px -1px rgba(37, 99, 235, 0.2), 0 2px 4px -1px rgba(37, 99, 235, 0.1)';
                  }}
                >
                  {link.name}
                </Link>
              );
            }

            if (link.subLinks) {
              return (
                <div
                  key={index}
                  style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <span style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '6px' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                    onMouseLeave={(e) => e.target.style.color = '#1e293b'}
                  >
                    {link.name}
                    <span style={{ fontSize: '10px', color: 'var(--primary)', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
                  </span>

                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1001,
                    paddingTop: '10px', // Invisible bridge to prevent closing
                    display: dropdownOpen ? 'block' : 'none',
                    opacity: dropdownOpen ? 1 : 0,
                    transition: 'opacity 0.2s ease',
                  }}>
                    <div style={{
                      background: 'white',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                      borderRadius: '8px',
                      padding: '8px',
                      minWidth: '240px',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid #f1f5f9'
                    }}>
                      {link.subLinks.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subLink.path}
                          style={{
                            padding: '12px 16px',
                            textDecoration: 'none',
                            color: '#475569',
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'all 0.2s',
                            borderRadius: '6px',
                            display: 'block'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#eff6ff';
                            e.target.style.color = 'var(--primary)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = '#475569';
                          }}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={index}
                to={link.hash ? `/${link.hash}` : link.path}
                className="nav-link"
                style={linkStyle}
                onClick={() => handleLinkClick(link.hash)}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                onMouseLeave={(e) => e.target.style.color = '#1e293b'}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <button
          className="show-mobile nav-toggle"
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '8px',
            color: '#1e293b',
            zIndex: 1100
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Sidebar/Menu overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '100px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'white',
          zIndex: 999,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          {navLinks.map((link, index) => {
            if (link.subLinks) {
              return (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <span style={{ ...linkStyle, color: 'var(--primary)' }}>{link.name}</span>
                  <div style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: '2px solid #f1f5f9' }}>
                    {link.subLinks.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subLink.path}
                        onClick={() => setIsMenuOpen(false)}
                        style={{ ...linkStyle, fontSize: '14px', fontWeight: '500', textTransform: 'none', color: '#64748b' }}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={index}
                to={link.hash ? `/${link.hash}` : link.path}
                className="nav-link"
                style={{ ...linkStyle, fontSize: '1.1rem' }}
                onClick={() => handleLinkClick(link.hash)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  )
}
