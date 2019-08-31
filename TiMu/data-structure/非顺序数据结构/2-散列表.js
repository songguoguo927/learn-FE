//HashTable类 也叫HashMap类 它是字典类的一种散列表实现方式
//ok 让字典更灵活 存储地址可以不连续

//散列算法的作用是尽可能快地在数据结构中找到一个值

//----后续走向
// 第七章 字典和散列表、散列集合
//树 第八章 6节
//图 第九章 6节
//排序和搜索算法 
//算法模式 递归 动态规划 贪心算法 函数式编程
//算法复杂度、
//--

function HashTable(){
    let table =[]//散列表
    //私有方法--散列函数
    //将每个键值中的每个字母的ASCII的值相加
    let loseloseHashCode = function(key){
        let hash = 0;
        for(let i =0;i<key.length;i++){
            hash += key.charCodeAt(i)
        }
        //为了得到一个较小的数值，会使用hash值和一个任意数做除法的余数
        return hash%37;
        //散列值对应散列表中的下标 下标对应放置值
    }
    this.put= function(key,val){
        let position = loseloseHashCode(key)
        console.log(position+'--'+key)
        table[position]=val;
    }
    this.remove = function(key){
        table[loseloseHashCode(key)]=undefined
    }
    this.get = function(key){
        return table[loseloseHashCode(key)]
    }
}
let hash = new HashTable()
hash.put('Tom','12345@qq.com')
hash.put('Mary','5439465@qq.com')
hash.put('Sale','199745@qq.com')
console.log(hash.remove('Tom'))
console.log(hash.get('Tom'))