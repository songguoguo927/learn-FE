var eventUtil = {
    //1 事件绑定  第四个参数用来标识是在冒泡阶段还是在捕获阶段执行函数
    bind:function(el,type,handle,capture){
        if(el.addEventListener){
            el.addEventListener(type,handle,capture)
        }else if(el.attachEvent){
            el.attachEvent('on'+type,handle)
        }else{
            el['on'+type] = handle
        }
    },
    //2 事件解绑
    unbind:function(el,type,handle){
        if(el.removeEventListener){
            el.removeEventListener(el,type,handle)
        }else if(el.detachEvent){
            el.detachEvent('on'+type,handle)
        }else{
            el['on'+type] = null;
        }
    },
    //3 事件对象
    
    getEvent:function(event){
        return event ? event:window.event;
    },
    //4 事件目标
    getTarget:function(event){
        return event.target?event.target:event.srcElement;
    },
    //5 停止冒泡
    stopProp:function(event){
        event.stopPropagation?event.stopPropagation():event.cancelBubble=true;
    },
    //6 阻止冒泡
    preventDefault:function(event){
        event.preventDefault?event.preventDefault():event.returnValue=false;
    }
    //this 指向正确 不必再操作
}
/**期待使用的操作方法 */
/*window.onclick = function(){
    var div=document.getElementsByTagName('div')[0];
    eventUtil.bind(div,'click',function(e){
        var e=eventUtil.getEvent(event);
        console.log(e);
        console.log(this)//div
        alert(1)
    })
}*/