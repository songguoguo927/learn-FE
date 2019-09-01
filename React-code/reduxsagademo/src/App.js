import React from "react";
import "./App.css";
import {connect} from 'react-redux';
import {changeDataA,getDataAFromSaga,delDataAfromSaga} from './store/actionCreator/appActionCreator'
//专门处理异步
// import {getDataAFromSaga} from './store/saga';
function App(props) {
  return (  
      <div className="App">
        {JSON.stringify(props)}
        <button onClick={props.changeData}>更改数据---同步</button>
        <button onClick={props.getData}>获取数据--异步操作</button>
        <button onClick={props.delData}>删除数据--异步操作</button>
      </div>
  );
}
const mapStateToProps = (state)=>state;
const mapDispatchToProps = (dispatch) =>{
  return {
    // A--action
    changeData:()=>{
      dispatch(changeDataA('change后'))
    },
    //获取异步数据
    getData:()=>{
      dispatch(getDataAFromSaga())
    },
    delData:()=>{
      dispatch(delDataAfromSaga({id:'1'}))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
