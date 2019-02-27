// 任意四个字符插入一个#号
let str = 'asdf123124asd124sadas'
let r = str.replace(/([\s\S]{4})/g,'$1#')
console.log(r);