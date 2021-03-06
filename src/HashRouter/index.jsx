import React, { Component } from 'react';
import CreateContext from "./CreateContext";
//HashRouter的简略实现
class HashRouter extends Component {

    constructor(props){
        super(props);
        //  /^(#)\/(\w+)(\?)?(\w+)?/gi; 这个正则匹配的是#hashRouter?search
        const iniLocation = /^(#)\/(\w+)(\?)?(\w+)?/gi.exec(window.location.hash);
        this.state={
            location:{
                pathname:`/${iniLocation[2]}`,
                search:`${iniLocation[3]}${iniLocation[4]}`
            }
        } 
    }
    componentDidMount(){
        //监听hash值的变化
        window.addEventListener("hashchange",()=>{
           const iniLocation = /^(#)\/(\w+)(\?)?(\w+)?/gi.exec(window.location.hash);
           this.setState({
               location:{
                   ...this.state.location,
                   pathname:`/${iniLocation[2]}`||"/",
                   search:`${iniLocation[3]}${iniLocation[4]}`||""
               }
           })
        })
        window.location.hash = window.location.hash || '/';
    }
    
    
    render() {
        let value = {
            location:this.state.location
        }
        return (
            <CreateContext.Provider value={value}>
                {
                    this.props.children
                }
            </CreateContext.Provider>
        );
    }
}

export default HashRouter;