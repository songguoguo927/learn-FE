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
function BST(){
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
    this.insert = function(key){
        let newNode = new Node(key)

        if(root === null){
            root=newNode
        }else{//将节点加在非根节点的其他位置
            insertNode(root,newNode)
        }
    }
    this.search = function(key){}
    //meOs：注意 这里的中 先 后 是针对root而描述，左永远在右前
    //中序遍历 左 root 右
    this.inOrderTraverse=function(){}   
    //先序遍历 root 左 右
    this.preOrderTraverse=function(){}
    //后续遍历 左 root 右
    this.postOrderTraverse=function(){}
    this.min = function(){}
    this.max = function(){}
    this.remove = function(){}

}