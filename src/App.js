import DrumKeyboard from "./components/DrumKeyboard";
import DrumMap from "./components/DrumMap";
import SoundFXDisplay from "./components/SoundFXDisplay";

function App() {
  return (
    <div id="drum-machine" className="App">
      <DrumMap />
      <SoundFXDisplay />
      <DrumKeyboard />
    </div>
  );
}

export default App;
