import React, { useState } from 'react';
import SpeakIcon from '../images/sound_max_fill.svg';
import CopyIcon from '../images/Copy.svg';
import ButtonIcon from '../images/Sort_alfa.svg';

const InputComponent: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>('English');

  const handleNavItemClick = (navItem: string) => {
    setActiveNavItem(navItem);
  };

  return (
    <div className="input-card">
      <div className="header-content">
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
      </div>
      <hr className='horizontal-line'/>
     
      <div className="input-field">
        <textarea
          placeholder="Enter text here"
        ></textarea>
      </div>
      <div className="accessible-buttons">
        <div className="speak-copy-icons">
          <img src={SpeakIcon} alt="speak" />
          <img src={CopyIcon} alt="copy" />
        </div>
        <div className="translate">
          <div className="word-counter-max-500">
            0/500
          </div>
          <div className="button-class">
          <button>
            <div className="icon">
              <img src={ButtonIcon} alt="translate" />
            </div>
            <div className="trans">
            Translate
            </div>
            
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default InputComponent;
