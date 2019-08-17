//编目数据的封装
var data = [
    { id: 1, name: "根编目", cate_path: null },
    { id: 2, name: "Java课程", cate_path: "1.2" },
    { id: 3, name: "Spring课程", cate_path: "1.2.3" },
    { id: 6, name: "Servlet课程", cate_path: "1.2.6" },
    { id: 4, name: "SpringBoot课程", cate_path: "1.2.3.4" },
    { id: 5, name: "Web课程", cate_path: "1.5" },
    { id: 7, name: "React课程", cate_path: "1.5.7" },
    { id: 8, name: "redux课程", cate_path: "1.5.7.8" },
    { id: 9, name: "JSX", cate_path: "1.5.7.9" },
    { id: 10, name: "Linux", cate_path: "1.2.10" },
    { id: 11, name: "store", cate_path: "1.5.7.8.11" },
    { id: 12, name: "H5课程", cate_path: "1.5.12" },
    { id: 13, name: "H5API", cate_path: "1.5.12.13" }

  ];
// /**封装数据
// 	一级内部有二级，二级内部有三级，三级内部有四级 。。。层级未知*/
// var exceptData = [
//   {
//     id: 2,
//     name: "Java课程",
//     cate_path: "1.2",
//     child: [
//       {
//         id: 3,
//         name: "Spring课程",
//         cate_path: "1.2.3",
//         child: [{ id: 4, name: "SpringBoot课程", cate_path: "1.2.3.4" }]
//       },
//       { id: 6, name: "Servlet课程", cate_path: "1.2.6" }
//     ]
//   },
//   {
//     id: 5,
//     name: "Web课程",
//     cate_path: "1.5",
//     child: [
//       {
//         id: 7,
//         name: "React课程",
//         cate_path: "1.5.7",
//         child: [{ id: 8, name: "redux课程", cate_path: "1.5.7.8" }]
//       }
//     ]
//   }
// ];

function transferData(dataArr){
    // dataArr.shift();
    dataArr = dataArr.filter(function(item){
    //    return item.cate_path !== null;
       return item.cate_path;
    })
    //提取出父id
    dataArr.map(function(item){
        var idArr = item.cate_path.split('.');
        var parent_id = idArr[idArr.length-2];
        item["parent_id"]=parent_id;
    })
    //把父id相同的放置在同一个数组里，并将这个数组放到id=父id的对象中，取名child       
    for(var i = 0;i<dataArr.length;i++){
        var id = dataArr[i]["id"];
        dataArr[i]["children"] = []
            for(var j=0;j<dataArr.length;j++){
                var parentId = dataArr[j]["parent_id"];
                if(id==parentId){                 
                   // dataArr[i]["open"]=true;
                dataArr[i]["children"].push(dataArr[j]);                       
                 }                      
            }   
        if(dataArr[i].children.length==0){
            delete dataArr[i].children
        }  
    }
    // dataArr.forEach(function(item){
    //     var id = item.id;
    //     item.children = [];
    //     //再次遍历找孩子
    //     dataArr.forEach(function(cItem) {
    //        if(id==cItem.parent_id){
    //         item.children.push(cItem)
    //        } 
    //     })
    //     if(item.children.length==0){
    //         delete item.children;
    //     }
    // })
    //将数据处理成我们要的数据                ^
    //如果dataArr中有children为[] 则去掉该属性|
    //一层层遍历 对children属性进行判断
    // dataArr.forEach(function(item){
    //    console.log(item)
    //     if(item.children.length==0){  //[]==[] //false
    //         console.log(111111111)
    //         delete item.children;
    //     }
    // })
    //保留两级
     return dataArr.filter(function(item){
       return item["cate_path"].length==3;
    })
// return dataArr;

}
console.log(transferData(data))

// [
//   {
//     "id": 2,
//     "name": "Java课程",
//     "cate_path": "1.2",
//     "parent_id": "1",
//     "child": [
//       {
//         "id": 3,
//         "name": "Spring课程",
//         "cate_path": "1.2.3",
//         "parent_id": "2",
//         "child": [
//           {
//             "id": 4,
//             "name": "SpringBoot课程",
//             "cate_path": "1.2.3.4",
//             "parent_id": "3",
//             "child": []
//           }
//         ]
//       },
//       {
//         "id": 6,
//         "name": "Servlet课程",
//         "cate_path": "1.2.6",
//         "parent_id": "2",
//         "child": []
//       }
//     ]
//   },
//   {
//     "id": 5,
//     "name": "Web课程",
//     "cate_path": "1.5",
//     "parent_id": "1",
//     "child": [
//       {
//         "id": 7,
//         "name": "React课程",
//         "cate_path": "1.5.7",
//         "parent_id": "5",
//         "child": [
//           {
//             "id": 8,
//             "name": "redux课程",
//             "cate_path": "1.5.7.8",
//             "parent_id": "7",
//             "child": []
//           }
//         ]
//       }
//     ]
//   }
// ]