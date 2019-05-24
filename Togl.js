import React from 'react'

class Togl extends React.Component{
  constructor(props){
    super(props)
    this.state = {isTogl: true}
  }
  handl = ()=>{
    this.setState(prevState => ({
       isTogl: !prevState.isTogl}));
  }
  render(){
    return (
    <button onClick = {this.handl}>{this.state.isTogl? "on" : "off"}</button>)
  }
}
export default Togl;
