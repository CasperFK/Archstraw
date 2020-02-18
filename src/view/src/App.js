import React, { Component } from "react";

import { PageApp } from './PageApp';

class App extends Component {
    render() {
        return (
            <PageApp>{this.props.title}</PageApp>
        )
    }
}

export default App;