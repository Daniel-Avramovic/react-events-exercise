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
  }
  onChangeUsername(e) {
    this.setState({ username: e.target.value })
  };
  onChangePassword(e) {
    this.setState({ password: e.target.value })
  };
  login(){
    alert(this.username + this.password)
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
  </div>
  )
}
}

export default App;
