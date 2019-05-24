import React from 'react'

class HelloWorldClass extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
      return (
        <div>
          <h1>{this.props.name}</h1>
          <h2>{this.props.country}</h2>
        </div>);
  }
}
export default HelloWorldClass;
