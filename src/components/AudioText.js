import React from "react"

const RandomAudio = () => {

  const playAudio = () => {
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  return (
    <div onClick={playAudio}>
      Press me!
      <audio className="audio-element" >
        <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
      </audio>
    </div>
  );
}

export default RandomAudio;