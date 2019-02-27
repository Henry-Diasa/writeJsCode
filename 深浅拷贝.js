// 浅拷贝Object.assign  

// 深拷贝
function deep(obj){
    function isObj(o){
        return (typeof o =='object' || typeof o == 'function') && o!==null
    }
    if(!isObj(obj)){
        throw new Error('不是对象')
    }

    var isArray = Array.isArray(obj)
    var newObj = isArray ? [...obj] : {...obj};
    Reflect.ownKeys(newObj).forEach(key=>{
        newObj[key] = isObj[obj[key]] ? deep(obj[key]) : obj[key]
    })
    return newObj;
}
