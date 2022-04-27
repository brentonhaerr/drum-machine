import React, { useEffect } from 'react';
import {Howl, Howler} from 'howler';

const AudioPlayer = () => {
  const cymballight1 = new Audio('../assets/cymballight1.mp3');
  let sound_file = new Howl({
    src: ['../assets/cymbal-light-2.mp3']
  });

  return (
    <div>
      <div onClick={() => { document.getElementById("cymbal1").play(); }}>
        Press to play
      </div>
      <audio id="cymbal1" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" type="audio/mpeg" ></audio>
      <button className="btn btn-primary" onClick={() => { sound_file.play() }}>
        Press to play using howler
      </button>
    </div>
  );
}

export default AudioPlayer;