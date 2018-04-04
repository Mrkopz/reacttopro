import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import Header from './Header'
import FbButton from './FbButton'

class App extends Component {
  //state = { like: 0, dislike: 0 }
  state = { data: null }

  componentWillMount(){
    console.log('App: willMount')
  }

  componentDidMount(){
    //this.txt2.focus()
    console.log('App: didMount')

    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(result => result.json())
    .then(result => this.setState({ data: result }))
    .catch(err => { 
      console.error(err) 
    }) 
  }

  render() {
    /*return (
      <div>
        <Header title="I am Header" like={this.state.like}/>
        <h4>Like : {this.state.like}</h4>        
        <h4>DisLike: {this.state.dislike}</h4>        
        <FbButton handleClick={this.onLike} caption="Like" />        
        <FbButton handleClick={this.onDisLike} caption="DisLike"/> 
      </div>
    );*/

    //using ref
    /*return (
      <div>
        <h1>App Page</h1>
        <input type="text" ref={(input) => { this.txt1 = input }}/>
        <input type="text" ref={(input) => { this.txt2 = input }}/>
      </div>
    )*/

    const { data } = this.state
    return (
      <div>
        <h1>App Page</h1>
        { data && data.map(d => {
          return (
            <div key={d.id}>
              <div><b>{d.title}</b></div>
              <div>{d.body}</div>
              <hr/>
            </div>
          )
        })}
      </div>
    )
  }

  onLike = () => {
    //this.setState({ like: this.state.like + 1 })
    this.setState({ like: this.state.like + 1 })

    this.setState((preState, props) => {
      return {
        like: preState.like + 1
      }
    })

    this.setState(preState => {
      return {
        like: preState.like + 1
      }
    })
  }
  
  onDisLike = () => {
    this.setState({ dislike: this.state.dislike + 1 })
  }
  
}

export default App;
