import React, { Component } from 'react';
import createContext from "./CreateContext";
class Route extends Component {
    //使用静态属性就可以直接使用this.context
    static contextType = createContext;

    render() {
        let { path,component:Component } = this.props;
        let location = this.context.location;
        if( path === location.pathname ) {
            return <Component  location={location} />
        }else{
            return null;
        }
    }
}

export default Route;