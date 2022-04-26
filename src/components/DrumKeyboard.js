import React from 'react';

const DrumKeyboard = () => {
  return ( <div id="drum-keyboard" className="container-sm justify-content-center" style={{display: "none"}}>
  <div className="row">
    <button id="snare" className="drum-pad" onClick={() => { console.log('hello')}} >
      Q
      <audio src="" className="clip"  id="Q" />
    </button>
    <button id="snare-1" className="drum-pad" onClick={() => { console.log('hello')}} >
      W
      <audio src="" className="clip"  id="W" />
    </button>
    <button id="snare-2" className="drum-pad" onClick={() => { return ('hello')}} >
      E
      <audio src="" className="clip"  id="E" />
    </button>
    <button id="kick" className="drum-pad" onClick={() => { console.log('hello')}} >
      A
      <audio src="" className="clip" id="A"  />
    </button>
    <button id="bong" className="drum-pad" onClick={() => { console.log('hello')}} >
      S
      <audio src="" className="clip"  id="S" />
    </button>
    <button id="ding" className="drum-pad" onClick={() => { console.log('hello')}} >
      D
      <audio src="" className="clip"  id="D" />
    </button>
    <button id="chord-1" className="drum-pad" onClick={() => { console.log('hello')}} >
      Z
      <audio src="" className="clip"  id="Z" />
    </button>
    <button id="chord-2" className="drum-pad" onClick={() => { console.log('hello')}} >
      X
      <audio src="" className="clip"  id="X" />
    </button>
    <button id="chord-3" className="drum-pad" onClick={() => { console.log('hello')}} >
      C
      <audio src="" className="clip"  id="C" />
    </button>
  </div>
</div> );
}
 
export default DrumKeyboard;