// OutputComponent.tsx
import React, { useState, useEffect } from 'react';
import SpeakIcon from '../images/sound_max_fill.svg';
import CopyIcon from '../images/Copy.svg';
import BackArrows from '../images/Horizontal_top_left_main.svg';
import DropDown from '../images/Expand_down.svg';
import translateText from './translationService';

interface OutputProps {
  translatedText: string;
  translationDirection: [string, string];
}

const OutputComponent: React.FC<OutputProps> = ({ translatedText, translationDirection }) => {
  const [activeNavItem, setActiveNavItem] = useState<string>('English');

  const handleNavItemClick = (navItem: string) => {
    setActiveNavItem(navItem);
  };

  useEffect(() => {
    const translateOutputText = async () => {
      try {
        const [sourceLanguage, targetLanguage] = translationDirection;
        const translatedTextResult = await translateText(translatedText, sourceLanguage, targetLanguage);
        console.log('Translated:', translatedTextResult);
        // Optionally update translated text state in OutputComponent if needed
      } catch (error) {
        console.error('Translation error:', (error as Error).message);
      }
    };

    if (translationDirection && translationDirection[0] && translationDirection[1]) {
      translateOutputText(); // Call translation function when translation direction is available
    }
  }, [translatedText, translationDirection]);

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
      <hr className="horizontal-line" />
      <div className="output-field">
        <textarea placeholder="Translation will appear here" readOnly value={translatedText}></textarea>
      </div>
      <div className="accessible-buttons-2">
        <div className="speak-copy-icons">
          <img src={SpeakIcon} alt="speak" />
          <img src={CopyIcon} alt="copy" />
        </div>
      </div>
    </div>
  );
};

export default OutputComponent;
