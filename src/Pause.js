import React from 'react';
import { App, isPaused,} from './App.js';
function Pause(){
  return(
    <div>
        <button onclick="pause()">Pause</button>
    </div>
  )
}

function pause(){
    isPaused = true;
}

export default Pause;