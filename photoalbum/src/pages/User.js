import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserList from '../components/Users/UserList';

class User extends Component {
    state = { data: null, isLoading:false };

    componentDidMount(){
        /*this.setState({ isLoading: true });
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(result => result.json())
        .then(result => this.setState({ data: result, isLoading: false }))*/
        this.props.loadUsers();
    }

    render() {
        //const { data, isLoading } = this.state;
        const { users } = this.props;
        if (users.isRejected) {
            return <div>Error....</div>
        }

        return (
            /*<div>
                <h1>Users</h1>
                {isLoading && <div>Loading...</div>}
                <UserList data={data} />
        </div>*/
        <div>
            <h1>Users</h1>
            <UserList data= {users.data} />
        </div>
    )

    }
}

function mapStateToProps(state) {
    return {
        users : state.users
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadUsers: () => {
            dispatch({
                type: 'LOAD_USERS',
                payload: fetch('https://jsonplaceholder.typicode.com/users')
                .then(result => result.json())
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);


