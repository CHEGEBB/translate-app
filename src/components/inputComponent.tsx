import React, { useState } from 'react';

const InputComponent: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>('English');

  const handleNavItemClick = (navItem: string) => {
    setActiveNavItem(navItem);
  };

  return (
    <div className="input-card">
      <div className="side">
        Detect Language
      </div>
      <nav>
        <div
          className={`nav-item ${activeNavItem === 'English' ? 'active' : ''}`}
          onClick={() => handleNavItemClick('English')}
        >
          English
        </div>
        <div
          className={`nav-item ${activeNavItem === 'French' ? 'active' : ''}`}
          onClick={() => handleNavItemClick('French')}
        >
          French
        </div>
        <div
          className={`nav-item ${activeNavItem === 'Spanish' ? 'active' : ''}`}
          onClick={() => handleNavItemClick('Spanish')}
        >
          Spanish
        </div>
      </nav>
      <hr className="horizontal-line" />
    </div>
  );
}

export default InputComponent;
