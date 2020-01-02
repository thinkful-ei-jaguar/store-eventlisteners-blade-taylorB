import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8,
    }
    
    state = {
        status: '',
        chamber: null,
        spinningTheChamber: false,
    }
    handleClick = e => {
        this.setState({
            spinningTheChamber: !this.state.spinningTheChamber,
            status: 'spinning the chamber and pulling the trigger!...'
        })
        let timeout = setTimeout(() => {
           let randomNumber = Math.ceil(Math.random() * 8);
            this.setState({
                chamber: randomNumber,
                spinningTheChamber: !this.state.spinningTheChamber,
                
            })
            if (this.state.chamber === this.props.bulletInChamber) {
                this.setState({
                    status: 'BANG!!!!'
                })
            }
            else {
                this.setState({
                    status: 'You\'re safe!'
                })
            }
        }, 2000)
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    render () {
       
        return <div>
            <p>{this.state.status}</p>
            <button onClick={this.handleClick}>Pull the trigger!</button>
        </div>
    }

}

export default RouletteGun