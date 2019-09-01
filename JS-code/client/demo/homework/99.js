
function nine(num){
    for(var i = 1;i<=num;i++){//控制行
        var expression = "";
        for(var j = 1;j<=i;j++){//j<=i  控制每行的个数
            expression += `${j}*${i}=${i*j} `;    
        }
        // console.log('----')
        console.log(expression)     
    }    
    // console.log(expression) 
}
nine(9)

/*other */
const MAX_WIDTH = 7
let table = ''
for (let rhs = 1; rhs <= 9; rhs++) {
    for (let lhs = 1; lhs <= 9; lhs++) {
        if (lhs <= rhs) table += `${lhs}*${rhs}=${lhs * rhs}`.padEnd(MAX_WIDTH)
    }
    table += '\n'
}
console.log(table)