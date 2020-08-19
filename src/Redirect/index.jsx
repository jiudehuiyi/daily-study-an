import React, { Component } from 'react';
import Context from "./Context";
//Redirect的简单实现,这个跟Link类似
class Redirect extends Component {
    static contextType = Context;

    render() {
        //可以用window.location.hash = this.props.to代替
        this.context.history.push( this.props.to );
        return null;
    }
}

export default Redirect;