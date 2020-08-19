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
//Login页面
// import React, { Component } from 'react'

// export default class Login extends Component {
//   handleClick = ()=>{
//     localStorage.setItem('logined','true');
//     if(this.props.location.state)
//       this.props.history.push(this.props.location.state.from);
//   }  
//   render() {
//     return (
//       <button className="btn btn-primary" onClick={this.handleClick}>登录</button>
//     )
//   }
// }



export default HOCPrivateRoute;