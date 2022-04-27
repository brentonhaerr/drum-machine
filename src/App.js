import AudioPlayer from "./components/AudioPlayer";
import RandomAudio from "./components/AudioText";
import DrumKeyboard from "./components/DrumKeyboard";
import DrumMap from "./components/DrumMap";
import SoundFXDisplay from "./components/SoundFXDisplay";

function App() {
  return (
    <div id="drum-machine" className="App">
      <DrumMap />
      <SoundFXDisplay />
      <DrumKeyboard />
      <RandomAudio />
      <AudioPlayer />
    </div>
  );
}


export default App;
