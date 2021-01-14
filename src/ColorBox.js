import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    if (this.opacity > 0.2) {
      return (
        <div className="color-box" style={{opacity: this.opacity - 0.1}}>
          {/* your conditional code here! */}
        </div>
      )
    } else {
      return (
        null
      )
    }

    
  }

}

