import React from 'react';
import { App, isPaused,} from './App.js';
function Start(){
  return(
    <div>
        <button onClick={start}>Start</button>
    </div>
  )
}

function start(){
    isPaused = false;
    console.log(2);
}

export default Start;