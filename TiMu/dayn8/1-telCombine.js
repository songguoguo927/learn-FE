//九键输入法
//2-abc 3-def 4-ghi 5-jkl 6-mno 7-pqrs 8-tuv 9-wxyz

//输入：2-9任意个数子组合字符串
//简单情况找规律  根据输入到输出找规律

function telCombine(str){
    //建立电话号码键盘映射
    let map = ['',1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
    //把输入的字符串按单字符分隔变成数组 234=>[2,3,4]
    let num = str.split('')
    //保存键盘映射后的字母内容，如23=>['abc','def']
    let code =[]
    num.forEach(item=>{
        if(map[item]){
            code.push(map[item])
        }
    })
    let comb = arr=>{
        let temp = []
        for(let i=0,il=arr[0].length;i<il;i++){
            for(let j =0,jl=arr[1].length;j<jl;j++){
                temp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0,2,temp)
        if(arr.length>1){
            comb(arr)
        }else{
            return temp
        }
        return arr[0]
    }
    return comb(code)
}
console.log(telCombine('234'))