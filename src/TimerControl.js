class TimerControl extends Component {
    render() {
        return (
            <div className="TimerControl">
                <div className="Timer-header">Stopwatch</div>
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