import React from "react";
import { useState } from "react";
import SpeakIcon from "../images/sound_max_fill.svg";
import CopyIcon from "../images/Copy.svg";
import BackArrows from "../images/Horizontal_top_left_main.svg";
import DropDown from "../images/Expand_down.svg";

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
        <div className="spanish">
        <div
          className={`nav-item ${activeNavItem === 'Spanish' ? 'active' : ''}`}
          onClick={() => handleNavItemClick('Spanish')}
        > Spanish
        </div>
        <div className="spanish-dropdown">
        <img src={DropDown} alt="dropdown" />
        </div>
        
        </div>
        <div className="arrows">
        <img src={BackArrows} alt="back" />
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
            <div className="accessible-buttons-2">
        <div className="speak-copy-icons">
          <img src={SpeakIcon} alt="speak" />
          <img src={CopyIcon} alt="copy" />
        </div>
      </div>
           
        </div>
      );
}
export default OutputComponent;