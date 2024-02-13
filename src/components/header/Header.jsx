import React from 'react';

function Header() {

  return (
  <>
    <nav className="navbar navbar-expand-lg fixed-top text-light text-center"
    style={{
      justifyContent: 'center',
      background: 'var(--bg)',
      borderRadius: '0 0 1rem 1rem',
      fontWeight: '700'
      }}>
      Foodies Hub
    </nav>
  </>
  );
}

export default Header;
