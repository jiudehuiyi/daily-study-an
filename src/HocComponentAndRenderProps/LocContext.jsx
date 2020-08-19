import React, { Component } from 'react';

//操纵组件的状态,例如为组件增加一个localstorage
class LocContext extends Component {
    render() {
        return (
            <div>
               localStorage的某个LocalStorage为： { this.props.localValue }
               <RenderChildren>
                   {
                       (target)=>{
                           return (
                           <div>x:{target.x},y:{target.y}</div>
                           )
                       }
                   }
               </RenderChildren>
               <RenderProps  render={ (target)=>{
                   return (
                       <div>a:{target.a},b:{target.b}  </div>
                   )
               } } />
            </div>
        );
    }
}

class RenderChildren extends React.Component {

    state={
        x:"xxxx",
        y:"yyyyy"
    }

    render(){
        return (
            <div>
                {this.props.children( this.state )}
            </div>
        )
    }
}

class RenderProps extends React.Component{
    state={
        a:"aaaa",
        b:"bbbbb"
    }

    render(){
        return (
            <div>
                {
                    this.props.render(this.state)
                }
            </div>
        )
    }
}

const localHighOrderComponent = (WrapperComponent,localName)=>{

    return class extends React.Component{
        state={
            localValue:""
        }
        componentDidMount(){
            let val = localStorage.getItem(localName);
            this.setState({
                localValue:val
            })
        }

        render(){
            return (
                <WrapperComponent  localValue={this.state.localValue} />
            )
        }
    }

}

export default  localHighOrderComponent(LocContext,"wwwPassLogout");
