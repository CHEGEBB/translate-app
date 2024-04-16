import React, { useState } from 'react';
import SpeakIcon from '../images/sound_max_fill.svg';
import CopyIcon from '../images/Copy.svg';
import ButtonIcon from '../images/Sort_alfa.svg';
import DropDown from '../images/Expand_down.svg';
import translateText from './translationService'; // Import translation service

const InputComponent: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>('English');
  const [text, setText] = useState<string>('');

  const handleNavItemClick = (navItem: string) => {
    setActiveNavItem(navItem);
  };
  
  const handleTextareaChange = async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;
    const truncatedText = inputText.length <= 500 ? inputText : inputText.slice(0, 500);
    setText(truncatedText);

    // Translate text when user inputs
    try {
      const translatedText = await translateText(truncatedText, 'en', activeNavItem.toLowerCase());
      console.log(translatedText); // Display translated text in console for now
    } catch (error: Error) { // Specify type of error explicitly
      console.error('Translation error:', error.message);
    }
  };
  
  const wordCount = text.length; 

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
          <div className="spanish">
            <div
              className={`nav-item ${activeNavItem === 'Spanish' ? 'active' : ''}`}
              onClick={() => handleNavItemClick('Spanish')}
            >
              Spanish
            </div>
            <div className="spanish-dropdown">
              <img src={DropDown} alt="dropdown" />
            </div>
          </div>
        </nav>
      </div>
      <hr className='horizontal-line'/>
      <div className="input-field">
        <textarea
          placeholder="Enter text here"
          value={text} 
          onChange={handleTextareaChange}
        ></textarea>
      </div>
      <div className="accessible-buttons">
        <div className="speak-copy-icons">
          <img src={SpeakIcon} alt="speak" />
          <img src={CopyIcon} alt="copy" />
        </div>
        <div className="translate">
          <div className="word-counter-max-500">
            {wordCount}/500 {/* Display word count */}
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
