function checkState(){
    alert("xjm");
}

window.setTimeout(checkState(),10000)//会立即被调用

window.setTimeout(checkState,10000)//10s后被调用

window.setTimeout("checkState()",10000)//10s后被调用
