//对于存储需要快速查找的数据非常有用

// 本章内容包括：
//  树的相关术语
//  创建树数据结构
//  树的遍历
//  添加和移除节点
//  AVL树

//树数据结构 ：树是一种==分层==数据的抽象模型  实例：家谱 公司架构图

//相关术语：
//一个树结构包含一系列存在父子关系的节点
//每个节点都有一个父节点（除了根节点）以及0个或多个子节点 

//内部节点--至少有一个子节点的节点称为内部节点
//外部节点--没有子元素的节点称为外部节点或叶子节点
//祖先：一个节点（根节点除外）的祖先包括 父节点 祖父节点 曾祖父节点等
//子树：子树由节点和他的后代构成
//深度：节点的一个属性，节点的深度取决于它祖先节点的数量
//           3
//          / \
//         1   2
//  1的深度为1
//
//高度：所有节点深度的最大值

//二叉树 ：二叉树中每个节点最多只能有两个子节点

//从/向树中插入、查找和删除节点的算法

//BST(BinarySearchTree) :二叉搜索树是二叉树的一种
//但是 ：只允许我们在左侧存储比父节点小的值，往右侧节点存储比父节点==大或等==的值
//二叉搜索树的中序遍历 结果 呈从小到大的顺序
//中序遍历的应用：对树进行排序操作
//先序遍历的应用：打印一个结构化的文档
//后序遍历的应用：计算一个目录和它的子目录中所有文件所占空间的大小

//##BST存在一个问题 取决于你添加的节点数，树的一条边可能会非常深
//导致问题：这回在需要在某条边上添加、移除和搜索某个节点时引起一些性能问题
//解决问题：AVL树--自平衡二叉搜索树
function BST(){//BST中最常实现的算法是递归
    let Node = function(key){
        this.key=key;
        this.left=null;
        this.right=null;
    }
    let root=null;
    //私有辅助函数
    let insertNode = function(node,newNode){
        if(newNode.key<node.key){//
            if(node.left===null){
                node.left=newNode;
            }else{
                insertNode(node.left,newNode)
            }
        }else{
            if(node.right===null){
                node.right=newNode;
            }else{
                insertNode(node.right,newNode)
            }
        }
    }
    //用来接收一个节点和对应的回调函数作为参数
    let inOrderTraverseNode =function(node,callback){
        if(node!==null){
            inOrderTraverseNode(node.left,callback);
            callback(node.key)
            inOrderTraverseNode(node.right,callback)
        }
    }
    let preOrderTraverseNode = function(node,callback){
        if(node!==null){
            callback(node.key)
            preOrderTraverseNode(node.left,callback)
            preOrderTraverseNode(node.right,callback)
        }
    }
    let postOrderTraverseNode = function(node,callback){
        if(node!==null){
            postOrderTraverseNode(node.left,callback)
            postOrderTraverseNode(node.right,callback)
            callback(node.key)
        }
    }
    //##树中插入值
    this.insert = function(key){
        let newNode = new Node(key)
        if(root === null){
            root=newNode
        }else{//将节点加在非根节点的其他位置
            insertNode(root,newNode)
        }
    }
    //meOs：注意 这里的中 先 后 是针对root而描述，左永远在右前
    //中序遍历 左 root 右
    //##树的遍历
    this.inOrderTraverse=function(callback){//callback是对每个节点要做些什么操作的回调函数
        inOrderTraverseNode(root,callback)
    }   
    //先序遍历--优先访问节点本身 root 左 右
    this.preOrderTraverse=function(callback){
        preOrderTraverseNode(root,callback)
    }
    //后续遍历 左 root 右
    this.postOrderTraverse=function(callback){
        postOrderTraverseNode(root,callback)
    }
   /**
    * 允许我们从树中任意一个节点开始寻找最小的键 可以求整棵树最小 或是某子树最小
    * 下面的maxNode searchNode方法也是一样
    * @param {*} node 
    */
    let minNode = function(node){
        if(node){
            while(node&&node.left!==null){//遍历树的左边，直到找到树的最下层
                node=node.left
            }
            return node.key
        }
        return null
    }
    let maxNode =function(node){
        if(node){
            while(node&&node.right!==null){
                node = node.right
            }
            return node.key
        }
        return null
    } 
    //##搜索树中的值
    this.min = function(){
        return minNode(root)
    }
    this.max = function(){
        return maxNode(root)
    }
    let searchNode = function(node,key){
        if(node===null){
            return false;
        }
        if(key<node.key){
            return searchNode(node.left,key)
        }else if(key>node.key){
            return searchNode(node.right,key)
        }else{//相等就找到了
            return true
        }
    }
    this.search = function(key){
        return searchNode(root,key)
    }
    let removeNode = function(node,key){
        if(node===null) return null;
        if(key<node.key){
            node.left = removeNode(node.left,key)
            return node
        }else if(key>node.key){
            node.right = removeNode(node.right,key)
            return node;
        }else{//键等于node.key
            //情况一：本身为叶节点，没有子节点
            if(node.left===null&&node.right===null){
                node = null;
                return node;
            }
            //情况二：一个只有一个子节点的节点
            if(node.left===null){node=node.right;return node;}
            else if(node.right===null){node=node.left;return node;}
            //情况三：一个有两个叶节点的节点
            //先寻找到右子树中的最小值，走马上任
            let aux = findMinNode(node.right)
            node.key = aux.key;
            node.right = removeNode(node.right,aux.key)
            return node;
        }
    }
    //寻找将要上任 的node 替代移除 的节点（有左右子节点的节点）
    let findMinNode = function(node){
        while(node&&node.left!==0){
            node = node.left
        }
        return node;
    }
    this.remove = function(key){
        root = removeNode(root,key)
    }

}
function printNode(value){ 
 console.log(value); 
}
let tree = new BST()
tree.insert(7); 
tree.insert(15); 
tree.insert(5); 
tree.insert(3); 
tree.insert(9); 
tree.insert(8); 
tree.insert(10); 
tree.insert(13); 
tree.insert(12); 
tree.insert(14); 
tree.insert(20); 
tree.insert(18); 
tree.insert(25);
tree.inOrderTraverse(printNode)
console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.'); 
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');