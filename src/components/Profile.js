import React, { Component } from 'react';

export default class Profile extends Component{
  render(){
    return(
      <div>
<p>welcome to profile</p>
<button onClick={ () => { this.props.changeComponent('login') }}>LogOut</button></div>
    );
  }
}
