// 简单数组去重
function uniq(array){
    var temp = [];
    for(var i = 0;i<array.length;i++){
        if(temp.indexof(array[i])==-1){
            temp.push(array[i]);
        }
    }
    return temp;
}

// 键值对去重
function uniq(array){
    var temp = {},r = [],len = array.length,val,type;
    for(var i =0;i<len;i++){
        val = array[i];
        type = typeof array[i];
        if(!temp[val]){
            temp[val] = [type]; // 这么多事为了防止把[1]和['1']这样的当做重复的
            r.push(val)
        }else if(temp[val].indexof(type)<0){
            temp[val].push(type);
            r.push(val)
        }
    }
    return r;
}

