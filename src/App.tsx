import React, { useState } from 'react';
import InputComponent from './components/inputComponent';
import OutputComponent from './components/outputComponent';
import Logo from './images/logo.svg';

function App() {
  const [translatedText, setTranslatedText] = useState<string>('');

  return (
    <div className="App">
      <div className="center-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="container">
        <div className="cards">
          <InputComponent setTranslatedText={setTranslatedText} />
          <OutputComponent translatedText={translatedText} />
        </div>
      </div>
    </div>
  );
}

export default App;
