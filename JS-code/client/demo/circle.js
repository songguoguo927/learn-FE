var count = 0;
my:for(;;){
    console.log(count)
    count += 1;
    if(count == 5){
        continue my;//结束本次循环，执行下一次循环
    }
    console.log('-----')
    if(count==20){
        break my;//结束循环不再进行下一次循环
    }
}
console.log('count’s value'+count)