import React, { Component } from 'react';

export default class Signup extends Component{
  render(){
    return(
      <div>
        <h3>Signup</h3>
        <form>
          <input type="text" placeholder="Name"/><br/>
          <input type="text" placeholder="email"/><br/>
          <input type="password" placeholder="password"/><br/>
          <button onClick={ () => { this.props.changeComponent('home') } }>Submit</button>
        </form>
        <p>Back to <a href='#' onClick={ () => { this.props.changeComponent('login') } }> Login</a></p>
      </div>
    );
  }
}
