import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import Header from './Header'
import FbButton from './FbButton'

class App extends Component {
  state = { like: 0, dislike: 0 }
  render() {
    return (
      <div>
        <Header/>
        <h4>Like : {this.state.like}</h4>        
        <h4>DisLike: {this.state.dislike}</h4>        
        <FbButton handleClick={this.onLike} caption="Like" />        
        <FbButton handleClick={this.onDisLike} caption="DisLike"/> 
      </div>
    );
  }

  onLike = () => {
    this.setState({ like: this.state.like + 1 })
  }
  
  onDisLike = () => {
    this.setState({ dislike: this.state.dislike + 1 })
  }
  
}

export default App;
