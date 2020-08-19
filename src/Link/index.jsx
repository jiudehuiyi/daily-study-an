import React, { Component } from 'react';
import Context from "./Context";
//Link的简略实现
class Link extends Component {

    static contextType = Context;

    render() {
        return (
            // this.context.history.push也直接可以使用window.location.hash = this.props.to代替
            <a href={()=>this.context.history.push( this.props.to )}>
                {
                    this.props.children
                }
            </a>
        );
    }
}

export default Link;