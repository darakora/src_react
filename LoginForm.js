import React from 'react'

class LoginForm extends React.Component{

    constructor(props){
    super(props)

      this.state = {login: "lplpl", password: ""};
      // this.onChangeLogin = this.onChangeLogin.bind(this);
  // this.onChangePassword
  // this.onChangeSubmit
      }

      onChangeLogin = (event)=>{
        this.setState({
          login: event.target.value
        });
      }
      onChangePassword = (event) =>{
        this.setState({
          password: event.target.value
        });
      }
      onSubmit = (event)=>{
      console.log ('Hello');
      alert('Hellooo');
        event.preventDefault();
      }
      render(){
        return (
          <form onSubmit = {this.onSubmit}>
            <p>
              <input type='text' value={this.state.login} onChange={this.onChangeLogin}>
              </input>
            </p>
            <p>
              <input type='text' value={this.state.password} onChange={this.onChangePassword}>
              </input>
            </p>
            <p><input type="submit" value="Submit"  /></p>

          </form>
        );
      }
}
export default LoginForm;
