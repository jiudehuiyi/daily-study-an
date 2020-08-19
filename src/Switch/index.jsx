import React, { Component } from 'react';
import Context from "./Context";

class Switch extends Component {
    static contextType = Context;
    render() {
        let pathname = this.context.location.pathname;
        for(let i=0;i<this.props.children.length;i++) {
            let child = this.props;children[i];
            let { path="/",exact=false,component:Component } = child.props;
            if(exact){
                if( path === pathname ) { return <Component /> }
                else return null;
            }else {
                if( pathname.include(path) ){ return child }
                else return null
            }
        }
      
    }
}

export default Switch;