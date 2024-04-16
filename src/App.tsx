import React from 'react';
import InputComponent from './components/inputComponent';
import OutputComponent from './components/outputComponent';
import Logo from './images/logo.svg';

function App() {
  return (
    <div className="App">
      <div className="center-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="container">
      <div className="cards">
        <InputComponent />
        <OutputComponent />
      </div>
      </div>
      
    </div>
  );
}

export default App;
