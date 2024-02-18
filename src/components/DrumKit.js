import React, { useEffect } from 'react';

const DrumKit = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'd') {
        const audio = new Audio(require('../sounds/sounds_clap.wav'));
        audio.play();
      }
      else if (event.key === 'a') {
        const audio = new Audio(require('../sounds/sounds_boom.wav'));
        audio.play();
      }
      else if (event.key === 'j') {
        const audio = new Audio(require('../sounds/sounds_hihat.wav'));
        audio.play();
      }
      else if (event.key === 's') {
        const audio = new Audio(require('../sounds/sounds_kick.wav'));
        audio.play();
      }
      else if (event.key === 'k') {
        const audio = new Audio(require('../sounds/sounds_tom.wav'));
        audio.play();
      }
      else if (event.key === 'l') {
        const audio = new Audio(require('../sounds/sounds_snare.wav'));
        audio.play();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
    </div>
  );
};

export default DrumKit;
