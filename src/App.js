import React, { Component } from 'react';
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";

class App extends Component {
  constructor(){
    super()
    this.state={componentToRender:'login'}
  }
  changeComponent = ( component ) => {
    this.setState({
      componentToRender: component
    })
  }
  render() {
    let Component=null
    switch(this.state.componentToRender){
      case 'login'  : Component = Login;
                      console.log('selecting login');
                      break;
      case 'signup' :Component = Signup
                      break;
      case 'home'   :Component = Home
                      break;
      case 'profile':Component = Profile
                      break;
    }
    return (
      <Component changeComponent = { this.changeComponent }/>
    );
  }
}
export default App;
