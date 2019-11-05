// let buffer = Buffer.from('xjm\r\njiam\r\nwow')

// const index = buffer.indexOf('\r\n')

// console.log(index) //3
// console.log(buffer.slice(0, index).toString()) //xjm

module.exports = function bufferSplit(buffer, separator) {
    let result = []
    let index = 0;

    while ((index = buffer.indexOf(separator)) != -1) {
        result.push(buffer.slice(0, index))
        buffer = buffer.slice(index + separator.length) //跳过分隔符 再次进行相同的操作，直到完成所有
    }
    result.push(buffer)

    return result
}