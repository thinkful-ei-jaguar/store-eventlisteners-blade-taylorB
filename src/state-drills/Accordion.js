import React from 'react';
import App from '../App'

class Accordion extends React.Component {
  
  static defaultProps = {
    sections: []
  }

  state = {
    currentButton: null,
    currentIndex: null
  }
  
  
  handleClick (content, index) {
    this.setState({
      currentButton: content,
      currentIndex: index
    })
  }

  renderContent(index) {
    const currentButton = this.state.currentButton;
    
    if (index === this.state.currentIndex) {
      return (
        <p>{this.state.currentButton}</p>
      )
    } else {
      return;
    }
  }

  renderButtons() {
    return this.props.section.map((item, index) => (
      (<li key={index}>
        <button onClick={() => this.handleClick(item.content, index)}>{item.title}</button>
        {this.renderContent(index)}
      </li>)
    ))
  }

  render () {
    return (
      <ul>
        {this.renderButtons()} 
      </ul>
    )
  }
}

export default Accordion;