// App.tsx
import React, { useState } from 'react';
import InputComponent from './components/inputComponent';
import OutputComponent from './components/outputComponent';
import Logo from './images/logo.svg';

function App() {
  const [translatedText, setTranslatedText] = useState<string>('');
  const [translationDirection, setTranslationDirection] = useState<[string, string]>(['en', 'en']);

  return (
    <div className="App">
      <div className="center-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="container">
        <div className="cards">
          <InputComponent setTranslatedText={setTranslatedText} setTranslationDirection={setTranslationDirection} />
          <OutputComponent translatedText={translatedText} translationDirection={translationDirection} />
        </div>
      </div>
    </div>
  );
}

export default App;
