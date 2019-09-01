import React from 'react';
import {render} from 'react-dom';
import './index.css';
// import App from './App';
import Example from './components/Example.js';
import ClsComponent from './tcomponents/ClsComponent';
import * as serviceWorker from './serviceWorker';
// console.log(<Example stu="student"/>)
let user = {
    name:'xjm'
}
let arr = ["apple","banana","3",4];
let show = true;
//传对象    temp={1,2,3}这种形式传过去的只有3;temp={[1,2,3]}传过去的是数组
render(<Example  user={user} arr={arr} show={show} temp={[1,2,3]}/>, document.getElementById('root'));
render(<ClsComponent user={user} />, document.getElementById('root2'));

//传字符串
// render(<Example  stu="student"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
