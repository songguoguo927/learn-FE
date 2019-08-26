import React, { Component } from 'react';
//实现表单数据和state中的数据双向绑定
//表单数据变化对应state中值也变化
//state变化，表单的value也变化---将数据模型中的数据展示在表单控件内
class Sxshujubd extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputVal:"hhh"
         }
        
    }
    handleChangeInput(event){//这个时候input就是受控组件
        this.setState({
            inputVal:event.target.value
        },()=>{
            console.log(this.state.inputVal)
        })
        
    }
   
    render() { 
        return ( 
            <>
            <input value={this.state.inputVal} onChange={this.handleChangeInput.bind(this)}></input>
            </>
         );
    }
}
 
export default Sxshujubd;