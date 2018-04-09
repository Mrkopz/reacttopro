import React, { Component } from 'react';

class Home extends Component{
    state = { age: 0 }
    render(){
        return(
            <div>
                <h3>อายุของคุณ : {this.state.age} ปี</h3>
                <button onClick={this.increteAge}>+คลิกบวกอายุ</button>
                <button onClick={this.decreteAge}>-คลิกลบอายุ</button>
            </div>
        );
    }

    increteAge = () => { 
        this.setState((prevState) => { 
            return { age: prevState.age + 1 
            } 
        }) 
    }

    decreteAge = () => {
        this.setState((prevState) => {
            return {
                age: prevState.age - 1
            }
        })
    }
}

export default Home;