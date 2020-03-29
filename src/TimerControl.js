//Created Timer following tutorial following https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2

import React, { Component } from "react";
import "./App.css";


class TimerControl extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };
//function that starts the timer using setInterval to count up 
    startTimer = () =>{
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() -this.state.timerStart
            });
        }, 10);
    };
//function that pauses timer using the boolean of timerOn.
   pauseTimer = () => {
       this.setState({timerOn: false });
       clearInterval(this.timer);
   };

//function that resets the time by setting all of the timer counts to 0
   resetTimer = () => {
       this.setState({
           timerStart: 0,
           timerTime: 0
       });
   };

    render() {
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);

        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);

        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        return (
            <div className="TimerControl">
                <div className="Timer-header">Stopwatch</div>
                <div className="Timer-display">
                    {hours} : {minutes} : {seconds} : {centiseconds}
                </div>
                {this.state.timerOn === false && this.state.timerTime === 0 && (
  <button onClick={this.startTimer}>Start</button>
)}

{this.state.timerOn === true && (
  <button onClick={this.pauseTimer}>Pause</button>
)}

{this.state.timerOn === false && this.state.timerTime > 0 && (
  <button onClick={this.startTimer}>Resume</button>
)}

{this.state.timerOn === false && this.state.timerTime > 0 && (
  <button onClick={this.resetTimer}>Reset</button>
)}

            </div>
        );
    }
}
// import React, { Component } from 'react'

// class TimerControl extends Component {
//     constructor(props) {
//         super(props);
//         this.handleStart = this.handleStart.bind(this);
//         this.handlePause = this.handlePause.bind(this);
//         this.handleReset = this.handleReset.bind(this);
//         this.state = {isPaused: false};
//         this.state = {timer: 0};
//     }

//     handleStart(){
        // this.setState({
        //     timer: this.state.timer
        // })
        // this.timer = setInterval(() => this.setState({
        //     timer: Date.now() - this.state.timer
        // }), 1);
//         let time = this.state.timer
//         this.setState({timer: setInterval(function (){time += 1}, 1000)})
       

//     }
//     handlePause (){
//         this.setState({isPaused: true});
        
//     }
//     handleReset (){
//         this.setState({timer: 0})
//     }

//     render(){
//         const {timer} = this.state
//         return (
//             <div>
//                 <h1>{timer}</h1>
//                 <button onClick={this.handleStart}>Start</button>
//                 <button onClick={this.handlePause}>Pause</button>
//                 <button onClick={this.handleReset}>Reset</button>
//             </div>
//         )
//     }
//     componentDidMount(){
//         let time = this.state.timer
//         if(isPaused){
//             this.interval = setInterval(() =>{
//                 this.setState({timer: time += 1 })
//             }, 1000)
//         }
//     }
    // componentDidMount () {
    //     const {time} = this.props
    //     this.setState({
    //         timer: time
    //     })
    //     this.myInterval = setInterval(() => {
    //         this.setState(prevState => ({
    //            timer: prevState.count + 1 
    //         }))
    //     }, 1000)

    // }
    // componentDidMount( function(){
    //     this.setInterval( () =>{
    //         this.setState({
    //            timer: this.state.timer + 1 
    //         })
    //     }, 1000);
    // });
    // componentDidMount(){
    //     let time = this.state.timer;
    //     this.setState({timer: setInterval(function (){time += 1}, 1000)})
    // }
    // componentDidMount() {
    //     this.interval = setInterval(() => this.setState({ timer: this.state += 1 }), 1000);
    //   }
    //   componentWillUnmount() {
    //     clearInterval(this.interval);
    //   }

    // componentDidMount() {
    //     this.myInterval = setInterval(() => {
    //         this.setState(prevState => ({
    //             timer: this.state.timer + 1
    //         }))
    //     }, 1000)
    // }
// }

export default TimerControl;