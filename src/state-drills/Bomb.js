import React from 'react';

class Bomb extends React.Component {
  
  state = {
    count: 0,
    word: "tock"
  }

  componentDidMount() {

    this.interval = setInterval(() => {
      this.setState ({
        count: this.state.count + 1
      })
      
      if (this.state.count % 2 === 0 && this.state.count < 8) {
        console.log('tick');
        this.setState({
          word: "tick"
        })
      } 
      else if (this.state.count % 2 !== 0 && this.state.count < 8) {
        console.log('tock');
        this.setState({
          word: "tock"
        }) 
      }
      else if (this.state.count >= 8) {
        console.log('boom with 4 exclamation points');
        this.setState({
          word: "BOOM!!!!"
        })
        clearInterval(this.interval)
      }
    }, 1000)

    
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render (){
    return (
      <div>
        <p>{this.state.word}</p>
      </div>
    )
  }
};

export default Bomb;