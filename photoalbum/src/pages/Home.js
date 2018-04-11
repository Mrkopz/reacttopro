import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component{
    state = { age: 0 }
    render(){
        /*return(
            <div>
                <h3>อายุของคุณ : {this.state.age} ปี</h3>
                <button onClick={this.increteAge}>+คลิกบวกอายุ</button>
                <button onClick={this.decreteAge}>-คลิกลบอายุ</button>
            </div>
        );*/
        return (
            <div>
                <h3>อายุของคุณ : {this.props.age} ปี</h3>
                <button onClick={this.props.increteAge}>+คลิกบวกอายุ</button>
                <button onClick={this.props.decreteAge}>-คลิกลบอายุ</button>
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

function mapStateToProps(state){
    return {
        age: state
    }
}

function mapDispatchToProps(dispatch){
    return {
        increteAge: () => {
            dispatch({type: 'INCREMENT'})
        },
        decreteAge: () => {
            dispatch({type: 'DECREMENT'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);