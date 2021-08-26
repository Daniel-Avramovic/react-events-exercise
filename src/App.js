import React from 'react'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.login = this.login.bind(this);
    this.reset = this.reset.bind(this);
  }
  onChangeUsername (e){
    this.setState({ username: e.target.value })
  };
  onChangePassword(e) {
    this.setState({ password: e.target.value })
  };
  login(){
    alert(this.state.username + this.state.password)
  };
  reset(){
    this.setState({
      username: '',
      password: '',
    })
  }
render(){
  return(
  <div className="form">
    <input type="text" value={this.state.username} onChange={this.onChangeUsername}/>
    <input type="text" value={this.state.password} onChange={this.onChangePassword}/>
    <button onClick={this.login}>Login</button>
    <button onClick={this.reset}>Reset</button>
  </div>
  )
}
}

export default App;
