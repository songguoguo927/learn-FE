const baseURL = 'http://134.175.154.93:8099';
const pageSize = 10;
//解决编辑修改时提交，数据丢失（时间没了）
function parseDate(){
    let date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth()+1
    let day = date.getDay()
    let hours = date.getHours()
    let mini = date.getMinutes()
    let sec = date.getSeconds()
    return `${year}-${formatNum(month)}-${formatNum(day)} ${formatNum(hours)}:${formatNum(mini)}:${formatNum(sec)}`
}
function formatNum(num){
    return  num = num>10 ? num : ('0'+num)
}
export default {
    baseURL,
    pageSize,
    parseDate
}