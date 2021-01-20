import React, { Component } from 'react';
import Post from '../components/post';

export default class logged extends Component {
    render() {
        return (
            <div>
                <h1>Welcome home</h1>
                <Post />
            </div>
        )
    }
}
