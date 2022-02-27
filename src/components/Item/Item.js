import React, { Component } from "react";
import {MdClear} from "react-icons/md"
import "./Item.css"

class Item extends Component {
  render() {
    const {item, onRemoveItem} = this.props
    return( 
    <div className="item">
      <p className="item-text">{item}</p>
      <button onClick={() => onRemoveItem(item)} className="item-button"><MdClear /></button>
    </div>
    )
  }
}

export default Item