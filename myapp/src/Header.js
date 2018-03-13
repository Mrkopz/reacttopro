import React, { Component } from 'react'

class Header extends Component {
    componentWillMount(){
        console.log('Header: willMount')
    }

    componentDidMount(){
        console.log('Header: didMount')
    }

    //first render component
    // shouldComponentUpdate(nextProps, nextState){
    //     return false
    // }

    componentWillReceiveProps(nextProps){
        console.log('nextProps', nextProps.like, 'props', this.props.like)
    }

    render() {
        console.log('Header: render')
        return (
            <div>
                <h1>{this.props.children}</h1>
            </div>
        )
    }
}

export default Header