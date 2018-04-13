import React, { Component } from 'react';

export default class Home extends Component{
  render(){
    return(
      <div>
     <p>haiii welcome</p>
     <button onClick={ () => { this.props.changeComponent('profile') }}>Profile</button>
     <button onClick={ () => { this.props.changeComponent('login') }}>LogOut</button>
   </div>
    );
  }
}
