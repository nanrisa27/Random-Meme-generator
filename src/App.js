import React, { Component } from 'react'
import Quotebox from "./Components/Quotebox"


export default class App extends Component {
  constructor(){
    super();
    this.state=({
      color:"purple"

    });
    this.handleColorChange=this.handleColorChange.bind(this);
  }
  handleColorChange(color){
    this.setState({
      color:color
    })
  }
  render() {
    return (
      <div className="app" id={this.state.color}>
      <Quotebox onChangeAppColor={this.handleColorChange} color={this.state.color}/>
        
      </div>
    )
  }
}









