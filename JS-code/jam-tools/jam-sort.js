/**
 * arr.sort(function(a,b){return a-b;}) //升序，b-a降序
 * //返回-1 不交换，1交换
want be
arr.mySort(function(a,b){return a-b;}) 实现一样的功能
*/
var arr = [9, 3, 4, 6, 1];

Array.prototype.mySort=function(fn){
  var val = fn()
  var arr = ['在哪获得']
   if(val<0){//升序排---采用快排思想
    var left = 0,right=arr.length-1;
    if(left>=right){
        return;
    }

    var baseVal = arr[Math.floor((i+j)/2)],i=left,j=right;;
    while(i<=j){
        while(arr[i]<baseVal){
            i++;
        }
        while(arr[j]>baseVal){
            j--;
        }
        if(i<=j){
            swap(arr,i,j)
            i++;
            j--;
        }
    }
    }
   else{//降序排

   }
   return arr;
}

arr.mySort(function(a,b){return a-b;})