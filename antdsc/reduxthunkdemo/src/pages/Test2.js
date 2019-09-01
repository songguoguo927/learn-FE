//test2组件   使用redux+react-redux去做数据的获取、展示与更改
import React from 'react';
import {connect} from 'react-redux';
import {changeTest2A,toGetDataA} from '../store/actionCreators/test2Action'
function Test2(props) {
    return (
        <div>
          {JSON.stringify(props)}  
          <button onClick={props.changeTest2}>更改test2的数据</button>
          <br></br>
          <button onClick={props.toGetData}>获取数据</button>
          {JSON.stringify(props.arr)}
        </div>
    );
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        changeTest2:()=>{
            //分发action
            dispatch(changeTest2A('0000'))
        },
        toGetData:()=>{
            dispatch(toGetDataA())
        }
    }
}
const mapStateProps = (state,ownProps)=>{
    //可以在这里重命名啊 添加数据 之类的操作
    return {
        test:state.test2.msg,
        val:"hello",
        arr:state.test2.arr
    }
}

//connect 的第一个参数mapStateProps是一个函数，函数有一个参数state 代表store中的所有的数据,返回的值是一个对象 就是UI组件中的props的数据
// export default connect(state=>state.test2)(Test2)
export default connect(mapStateProps,mapDispatchToProps)(Test2)