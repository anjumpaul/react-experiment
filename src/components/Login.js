import React, { Component } from 'react';
import Home from "./Home"

export default class Login extends Component{

  render() {
    return(
      <div>
        <h3>Login</h3>
        <form>
            email:
            <input type="text" placeholder="email"/><br/>
            password:
            <input type="password" placeholder="password" /><br/>
            <button onClick={ () => { this.props.changeComponent('home') }}>Login</button>
        </form>
        <p>New User? <a href='#' onClick={ () => { this.props.changeComponent('signup') } }> Signup</a></p>
      </div>
    );
  }
}
