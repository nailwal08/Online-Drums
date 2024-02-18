import React, { useState } from 'react';
import Keys from './components/Keys';
import DrumKit from './components/DrumKit';
import './App.css';

function App() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isNoteExpanded, setIsNoteExpanded] = useState(false);
  const note = "demo menu is expanded text";
  const questionNote = "demo question mark text";

  const toggleMenuExpansion = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  const toggleNoteExpansion = () => {
    setIsNoteExpanded(!isNoteExpanded);
  };

  return (
    <>
    <div className="App">
      <div className="header">

      <div style={{ width: '30px', height: '3px', marginBottom: '5px', fontSize: '27px', cursor: 'pointer' }} onClick={toggleNoteExpansion}>❓</div>
            {isNoteExpanded && (
            <div style={{ position: 'absolute', top: '50px', right: '10px', backgroundColor: 'yellow', padding: '10px', borderRadius: '5px', zIndex: '2' }}>
              <p>{questionNote}</p>
            </div>
          )}
      <h1>Online Drum Simulator</h1>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '30px', height: '3px', backgroundColor: 'black', marginBottom: '5px', cursor: 'pointer' }} onClick={toggleMenuExpansion}></div>
            <div style={{ width: '30px', height: '3px', backgroundColor: 'black', marginBottom: '5px', cursor: 'pointer' }} onClick={toggleMenuExpansion}></div>
            <div style={{ width: '30px', height: '3px', backgroundColor: 'black', cursor: 'pointer' }} onClick={toggleMenuExpansion}></div>
          </div>
          {isMenuExpanded && (
          <div style={{ position: 'absolute', top: '10%', right: '10%', backgroundColor: 'yellow', padding: '10px', borderRadius: '5px', zIndex: '1' }}>
            <p>{note}</p>
          </div>
        )}
      </div>
      <DrumKit/>
      <Keys/>
      
      <span className="footer">Made with <span className="heart">&hearts; </span>by Nikhil Nailwal</span>
      </div>
      </>
  );
}

export default App;
