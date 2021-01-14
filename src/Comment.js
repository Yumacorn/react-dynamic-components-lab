//your code here
import React, { Component} from 'react'
export default class Comment extends Component {
  
    render() {
        return <div className="comment">{this.props.commentText}</div>
        // return null
    //   if (this.opacity > 0.2) {
    //     return (
    //       <div className="color-box" style={{opacity: this.opacity - 0.1}}>
    //         {/* your conditional code here! */}
    //       </div>
    //     )
    //   } else {
    //     return (
    //       null
    //     )
    //   }
  
      
    }
  
  }