/*function* test() {
  // console.log(1);
  yield 1;
  // console.log(2);
  yield 2;
  // console.log(3);
  yield 3;
  // console.log(4);
  return 4;
}
let temp = test();
console.log(temp);//Object [Generator] {}
console.log(temp.next());// { value: 1, done: false }
console.log(temp.next());//{ value: 2, done: false }
console.log(temp.next());//{ value: 3, done: false }
console.log(temp.next());//{ value: 4, done: true }
console.log(temp.next());//{ value: undefined, done: true }*/

// function* test() {
//   let a = yield 1;
//   console.log(a, '----');
//   let b = yield 2;
//   console.log(b, '++++');
// }
// let temp = test();
// console.log(temp.next(temp.next(temp.next().value).value));//next(可传参)
// console.log(temp.next());
// console.log(temp.next());

function* test() {
  let a = yield axios.get('', {});
  let b = yield axios.get('', {});
  yield put(actionCreators(a))
}




