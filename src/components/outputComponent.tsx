import React from "react";
import { useState } from "react";

const OutputComponent:React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>('English');
  const handleNavItemClick = (navItem: string) => {
    setActiveNavItem(navItem);
  }
    return (
        <div className="output-card">
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
        </div>
      );
}
export default OutputComponent;