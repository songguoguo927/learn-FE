function fn() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(30);
      }, 2000);
    });
  }
  // fn()//--?会在 2s 后返回数值30
  
  //使用 async/await 语法来模拟同步的效果
  // var foo =async function(){
  //     var t = await fn();
  //     console.log(t)
  //     console.log('next-code')
  // }
  // foo() //会在 2s 后返回30 next-code
  // console.log('www')
  
  //异步效果会有不同的输出结果
  
  var foo = function(){
      fn().then(function(resp){
          console.log(resp)
      })
      console.log('next-code')
  }
  // foo()//输出结果 next-code //停顿2s后输出30
  
  var flag = 0;
  var p = new Promise(function(resolve,reject){//第一个参数是把状态从pending-》resolved的回调函数，同时把数据传递出去
      if(flag){
          resolve('flag is true')
      }else{
          reject('flag is false')
      }
  })
  //执行是异步的
  p.then(function(result){
      console.log('res:',result)
  }).catch(function (err) {console.log('err:',err)  })
  
  /*与上面等价
  p.then(function(result){
      console.log(result)
  })
  p.catch(function (err) {console.log(err)  })*/

  {
      function fn(num){
          //创建一个Promise实例 
          return new Promise(function(resolve,reject){
              if(typeof num == 'number'){
                  //修改结果状态值为resolved
                  resolve()
              }else{
                  //修改结果状态值为rejected
                  reject()
              }
          }).then(function(){
              console.log('参数是一个number值')
          }).catch(function () { console.log('参数不是一个number值') })
      }
      fn(NaN)
      console.log('next-code')

  }
  {
    {
        function fn(num){
            //创建一个Promise实例 
            return new Promise(function(resolve,reject){
                setTimeout(function(){
                    if(typeof num == 'number'){
                        resolve(num)
                    }else{
                        var err = `${num} is not a number`
                        reject(err)
                    }
                },2000)
            }).then(function(res){
                console.log(res)
            }).catch(function (error) { console.log(error) })
        }
        fn('122')
        console.log('next-code')

    }
  }
  {//上面的栗子可修改为下，因为fn函数运行的结果返回一个Promise对象
    {
        function fn(num){
            //创建一个Promise实例 
            return new Promise(function(resolve,reject){
                setTimeout(function(){
                    if(typeof num == 'number'){
                        resolve(num)
                    }else{
                        var err = `${num} is not a number`
                        reject(err)
                    }
                },2000)
            })
        }
        //其实then方法可以接收两个参数，第一个参数用来处理resolved状态的逻辑（函数），第二个用来处理rejected状态的逻辑
        //then的返回值仍是一个Promise实例对象，so，then方法可以嵌套使用
        fn('2').then(function(res){//可以在内部函数的末尾return的方式，能够将数据持续往后传递
            console.log(res)
        }).catch(function (error) { console.log(error) })
        console.log('next-code')
        //catch方法其实等价下面的写法
        //fn.name('2').then(null,function(err){...})
    }
  }

  {//数据传递的栗子
    
        {
            function fn(num){
                //创建一个Promise实例 
                return new Promise(function(resolve,reject){
                    setTimeout(function(){
                        if(typeof num == 'number'){
                            resolve(num)
                        }else{
                            var err = `${num} is not a number`
                            reject(err)
                        }
                    },2000)
                })
            }
            fn(20)
            .then(function(result){
                console.log(result)//20
                return result+1;
            })
            .then(function(result){
                console.log(result)//21
                return result+1;
            })
            .then(function(result){
                console.log(result)//22
                //这里没有继续传递，所以下面打印出undefined
            })
            .then(function(result){
                console.log(result)  //undefined      
            })
            console.log('next-code')
    
        }
      
  }
 
  //后面可以尝试封装Ajax请求的方法--使用Promise