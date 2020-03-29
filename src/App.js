import React, { Component } from "react";

import TimerControl from "./TimerControl";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ="App-title">Timer Demo</div>
        <div className="Timer">
          <TimerControl/>
        </div>
      </div>
    );
  }
}

export default App;



// import React, { Component } from 'react'
// import './App.css'
// // import StopWatch from './StopWatch'
// import TimerControl from './TimerControl'


// class App extends Component {
//   constructor(props){
//     super(props);
    
//     this.state = {
//       isPaused: false,
//       timer: 0
//     }
//   }
  
//   render(){
  
//     return (
//       <div className="App">
//         {/* <StopWatch></div> */}
//         <TimerControl></TimerControl>
//       </div>
//     )
//   }
// }

// export default App;
