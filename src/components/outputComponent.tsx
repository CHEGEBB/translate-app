import React from "react";
import { useState } from "react";
import SpeakIcon from "../images/sound_max_fill.svg";
import CopyIcon from "../images/Copy.svg";
import ButtonIcon from "../images/Sort_alfa.svg";

const OutputComponent:React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>('English');
  const handleNavItemClick = (navItem: string) => {
    setActiveNavItem(navItem);
  }
    return (
        <div className="output-card">
          <div className="header-content-2">
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
            <div className="accessible-buttons">
        <div className="speak-copy-icons">
          <img src={SpeakIcon} alt="speak" />
          <img src={CopyIcon} alt="copy" />
        </div>
      </div>
           
        </div>
      );
}
export default OutputComponent;