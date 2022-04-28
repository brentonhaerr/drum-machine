import React, { useEffect } from 'react';
import {Howl, Howler} from 'howler';
import tomhigh1fx from '../audio/tom-high-1.mp3';
import tomhigh2fx from '../audio/tom-high-2.mp3';
import cymballight1fx from '../audio/cymbal-light-1.mp3';
import cymballight2fx from '../audio/cymbal-light-2.mp3';
import kickfx from '../audio/kick.mp3';
import snarefx from '../audio/snare.mp3';
import tommid1fx from '../audio/tom-mid-low-1.mp3';
import tommid2fx from '../audio/tom-mid-low-2.mp3';

const playTomMid = () =>{
  let sound = new Audio(kick);
  sound.play();
}

const AudioPlayer = () => {

  const tomhigh1 = new Audio(tomhigh1fx);
  const tomhigh2 = new Audio(tomhigh2fx);
  const cymballight1 = new Audio(cymballight1fx);
  const cymballight2 = new Audio(cymballight2fx);
  const kick = new Audio(kickfx);
  const snare = new Audio(snarefx);
  const tommid1 = new Audio(tommid1fx);
  const tommid2 = new Audio(tommid2fx);

  return (
    <div>
      <audio id="tomhigh1" src="{tomhigh1}" type="audio/mpeg"></audio>
      <audio id="tomhigh2" src="{tomhigh2}" type="audio/mpeg"></audio>
      <audio id="cymballight1" src="{cymballight1}" type="audio/mpeg"></audio>
      <audio id="cymballight2" src="{cymballight2}" type="audio/mpeg"></audio>
      <audio id="kick" src="{kick}" type="audio/mpeg"></audio>
      <audio id="snare" src="{snare}" type="audio/mpeg"></audio>
      <audio id="tommid1" src="{tommid1}" type="audio/mpeg"></audio>
      <audio id="tommid2" src="{tommid2}" type="audio/mpeg"></audio>
    </div>
  );
}

export default AudioPlayer;