import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Redirect from '../Redirect';

//私有路由的实现,也可以写成高阶组件或者renderProps
const HOCPrivateRoute = ({ component:Component,...rest })=>(
    <Route  {...rest} render={ (props)=>{
        return (
            localStorage.getItem("logined")
                ?<Component {...props} />
                :<Redirect to={{ pathname:"/login",state:{from:props.location.pathname} }}  />
        )
    } } />
)


export default HOCPrivateRoute;