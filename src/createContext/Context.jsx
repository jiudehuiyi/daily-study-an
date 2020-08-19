import React, { Component,  } from 'react';

//因为React是单向数据流得，所以当组件隔离比较远得时候就会出现一层层传递得麻烦，因此Context是解决这个问题的方法，例如需要传递一些地区偏好，颜色，主题


const ThemeContext = React.createContext();
// 1.类组件的使用
class Content extends React.Component{
    //这里可以使用contextType直接接收context，当然也可以通过Consumer进行接收，
    static contextType = ThemeContext;

    render(){
        return (
            <div>
                <div style={{ color:`${this.context.color}` }}>颜色为:{this.context.color}</div>
                <button onClick={ ()=>this.context.onChangeColor("yellow") }>改变为黄色</button>
            </div>
        )
    }
}

class Main extends React.Component {

    render(){
        return (
            <div>
                <Content />
            </div>
        )
    }
}

class Context extends Component {
    state = {
        color:"red"
    }

    onChangeColor=(value)=>{
        this.setState({
            color:value
        })
    }
    render() {
        const value ={
            color:this.state.color,
            onChangeColor:this.onChangeColor
        }
        return (
            <div>
                
                <ThemeContext.Provider 
                    value={ value }
                >
                    <Main />
                </ThemeContext.Provider>

            </div>
        );
    }
}

// 2.函数组件的使用(React-hook:useContext):

// function Content(){
//     const ConContext = useContext(ThemeContext);
//     return (
//         <div style={{ color:`${ConContext.color}` }}>
//             颜色为：{ConContext.color}
//             <button onClick={ ()=>ConContext.onChangeColor("yellow") }>改变为黄色</button>
//         </div>
//     )
// }

// function Main(){
//     return (
//         <div>
//             <Content />
//         </div>
//     )
// }

// class Context extends Component {
//     state = {
//         color:"red"
//     }

//     onChangeColor=(value)=>{
//         this.setState({
//             color:value
//         })
//     }
//     render() {
//         const value ={
//             color:this.state.color,
//             onChangeColor:this.onChangeColor
//         }
//         return (
//             <div>
                
//                 <ThemeContext.Provider 
//                     value={ value }
//                 >
//                     <Main />
//                 </ThemeContext.Provider>

//             </div>
//         );
//     }
// }

// 3.createContext简化版的实现：实际上是一个高阶函数
// 使用:
{/* <ThemeContext.Provider value={xxx}>

</ThemeContext.Provider>
<ThemeContext.Consumer>
    {
        (value)=>{
            return xxx
        }
    }
</ThemeContext.Consumer> */}

// function createContext(defaultValue){
//     let value ;
//     class Provider extends React.Component {
//         constructor(props){
//             super(props);
//             value = props.value || defaultValue;
//             this.state={};
//         }
//         static getDerivedStateFromProps(nextProps,prevState){
//             value = nextProps.value || defaultValue;
//             return {};
//         }

//         render(){
//             return this.props.children;
//         }
//     }

//     class Consumer extends React.Component{
//         constructor(props){
//             super(props);
//         }

//         render (){
//             return this.props.children(value);
//         }
//     }
//     return {
//         Provider,
//         Consumer,
//     }

// }



export default Context;