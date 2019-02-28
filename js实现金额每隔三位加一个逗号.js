Number(123456).toLocaleString()



// 考虑小数点的情况
function transform(number){
    var num = number.toString() 
    var numArr = num.split('.')
    var [num, dotNum] = numArr


    var operateNum = num.split('').reverse()
    var result = [], len = operateNum.length
    for(var i = 0; i< len; i++){
         result.push(operateNum[i])
         if(((i+1) % 3 === 0) && (i !== len-1)){
              result.push(',')
        }
    }

    if(dotNum){
         result.reverse().push('.', ...dotNum)
         return result.join('')
    }else{
         return result.reverse().join('')
    }

}
// 递归实现
function formattedNumber(num) {
    var num = (num || 0).toString();
    var result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    return result;
}