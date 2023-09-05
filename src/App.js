import React, { useState } from 'react';
import './App.css'

const DrumMachine = () => {
  const [displayText, setDisplayText] = useState('Press a key');
  
  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
    setDisplayText(sound.split('/').pop().split('.')[0]);
  };

  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    const soundMappings = {
      Q: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', 
      W: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      E: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      A: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      S: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      D: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      Z: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      X: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      C: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    };
    
    if (soundMappings[key]) {
      playSound(soundMappings[key]);
    }
  };

  return (
    <div id="drum-machine" onKeyDown={handleKeyPress} tabIndex="0">
      <div id="display">{displayText}</div>
      <div id="wholedrum">
      <div className="drum-pad" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')}>Q</div>
      <div className="drum-pad" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')}>W</div>
      <div className="drum-pad" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')}>E</div>
      <div className="drum-pad" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')}>A</div>
      <div className="drum-pad" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')}>S</div>
      <div className="drum-pad" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')}>D</div>
      <div className="drum-pad" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')}>Z</div>
      <div className="drum-pad" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')}>X</div>
      <div className="drum-pad" onClick={() => playSound('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')}>C</div>
      </div>
      {/* Add more drum pads */}
    </div>
  );
};

export default DrumMachine;
