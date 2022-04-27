import React, { useEffect } from 'react';

const AudioPlayer = () => {
  const cymballight1 = new Audio('../assets/cymballight1.mp3');

  return (
    <div>
      <div onClick={() => { document.getElementById("cymbal1").play(); }}>
        Press to play
      </div>
      <audio id="cymbal1" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" type="audio/mpeg" ></audio>
    </div>
  );
}

export default AudioPlayer;