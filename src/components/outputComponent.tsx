import React from "react";
import { useState } from "react";

const OutputComponent:React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>('English');
  const handleNavItemClick = (navItem: string) => {
    setActiveNavItem(navItem);
  }
    return (
        <div className="output-card">
          <div className="header-content">
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
          <hr className='horizontal-line'/>
          <div className="output-field">
            <textarea
              placeholder="Translation will appear here"
              readOnly
            ></textarea>
            </div>
           
        </div>
      );
}
export default OutputComponent;