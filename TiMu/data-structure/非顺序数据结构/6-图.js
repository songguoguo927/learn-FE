const Dictionary = require('./1-字典')
function Graph(){
    //Graph类的私有属性
    let vertices = []//用于存储图中所有顶点的名字
    let adjList = new Dictionary()//使用字典来存储邻接表--使用顶点的名字作为键，邻接顶点的列表作为值
    //添加顶点的方法
    this.addVertex = function(v){
        vertices.push(v)
        adjList.set(v,[])
    }
    //添加边的方法
    this.addEdge = function(v,w){
        adjList.get(v).push(w)//如果是有向图，不用写下面的
        adjList.get(w).push(v)//基于大多数图是无向的，故添加此行代码
    }
    //为了便于控制台输出
    this.toString = function(){
        let s=''
        vertices.forEach(item=>{
            s += item + '->'
            let neighbors = adjList.get(item)
            neighbors.forEach(item=>{
                s += item + ' '
            })
            s += '\n'
        })
        return s;
    }
}

var graph = new Graph(); 
var myVertices = ['A','B','C','D','E','F','G','H','I']; //{7} 
for (var i=0; i<myVertices.length; i++){ //{8} 
 graph.addVertex(myVertices[i]); 
} 
graph.addEdge('A', 'B'); //{9} 
graph.addEdge('A', 'C'); 
graph.addEdge('A', 'D'); 
graph.addEdge('C', 'D'); 
graph.addEdge('C', 'G'); 
graph.addEdge('D', 'G'); 
graph.addEdge('D', 'H'); 
graph.addEdge('B', 'E'); 
graph.addEdge('B', 'F'); 
graph.addEdge('E', 'I');
console.log(graph.toString());
//一个漂亮的邻接表,从输出中，很容易知道顶点A有几个相邻的顶点
// A->B C D
// B->A E F
// C->A D G
// D->A C G H
// E->B I
// F->B
// G->C D
// H->D
// I->E