import React, { Component } from 'react'

class Header extends Component {
    render() {
        return(
            <div>
                <h1>This is Header { this.props.title }</h1>
            </div>
        )
    }
}

export default Header