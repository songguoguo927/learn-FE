// function functions(flag) {
//     if (flag) {
//       function getValue() { return 'a'; }
//     } else {
//       function getValue() { return 'b'; }
//     }

//     return getValue();
// }

function functions(flag) {
    if (flag) {
     getValue = function() { return 'a'; }
    } else {
     getValue = function() { return 'b'; }
    }

    return getValue();
}
console.log(functions(true))
console.log(functions(false))
