//使用字典和散列表来存储唯一值的数据结构
//>集合 存储 值-值  字典和散列表可以存储不重复的值

//字典 存储键-值映射  类似ES6中的Map
function Dictionary(){
    let items = {}
    this.set=function(key,val){
        items[key]=val
    }
    this.delete=function(key){
        if(this.has(key)){
            delete items[key]
            return true;
        }
        return false;
    }
    this.has=function(key){
        return items.hasOwnProperty(key)
    }
    this.get=function(key){
        return this.has(key)?items[key]:undefined
    }
    this.clear=function(){
        items ={}
    }
    this.size=function(){
        let count =0;
        for(let key in items){
            if(this.has(key)){
                ++count
            }
        }
        return count
    }
    this.values=function(){
        let values = []
        for(let k in items){
            if(this.has(k)){
                values.push(items[k])
            }
        }
        return values
    }
    this.keys=function(){
        return Object.keys(items)
    }
    this.getItems = function(){
        return items;
    }
}
console.log(Dictionary.items)