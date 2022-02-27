import React, { Component } from "react";
import "./Button.css"

class Button extends Component { 
  render() {
    const { children, onClick, type } = this.props
    return (
      <button
      type={type}
        className="button"  
        onClick={onClick}>{children}
        </button>
    )
  }
}

export default Button