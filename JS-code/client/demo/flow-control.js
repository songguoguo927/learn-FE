function isNum(grade) {//不用Number 用parseFloat
  if (typeof grade == "string") grade = parseFloat(grade); //for code Robustness  ，if user input is string 我们抢救一下
  return typeof grade == "number" && grade >= 0 && grade <= 100 ? true : false;
}
/*判断成绩等级*/
function gradeLevel(grade) {
  if (isNum(grade)) {
    if (grade < 60) result = "不及格";
    else if (grade >= 60 && grade < 70) result = "中等";
    else if (grade >= 70 && grade < 80) result = "中等偏上";
    else if (grade >= 80 && grade < 90) result = "良好";
    else if (grade >= 90 && grade <= 100) result = "优秀";
    console.log(result);
  } else console.log("输入有误请更改，格式为在0-100的数字！😁");
}
/*test gradeLevel function */
function testGradeLevel(gradeArr) {
  var len = gradeArr.length;
  for (let i = 0; i < len; i++) {
    // console.log(gradeArr[i])
    gradeLevel(gradeArr[i]);
  }
}
testGradeLevel([87, 90, "59", "", " ", {}, undefined, null, true, 0, NaN]);
/*判断星期几*/

function whichDay(num) {
  switch (num) {
    case 1:
      console.log("星期一");
      break;
    case 2:
      console.log("星期二");
      break;
    case 3:
      console.log("星期三");
      break;
    case 4:
      console.log("星期四");
      break;
    case 5:
      console.log("星期五");
      break;
    case 6:
      console.log("星期六");
      break;
    case 7:
      console.log("星期日");
      break;
    default:
      console.log("数值有误🙃");
  }
}
// whichDay(1)
// whichDay(3)
// whichDay(5)
// whichDay(7)
// whichDay(9)
