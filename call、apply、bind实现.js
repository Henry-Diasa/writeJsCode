Function.prototype.mycall = function(context){
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    let context = context || 'window';
    context.fn = this // 这里是为了改变this的指向
    let arg = [...arguments].slice(1);
    let result = context.fn(...arg)
    delete context.fn;
    return result;
}

Function.prototype.myapply = function(context){
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    } 
    let context = context || 'window';
    context.fn = this // 这里是为了改变this的指向
    let result;
    if(arguments[1]){
        result = context.fn(...arguments[1])
    }else{
        result = context.fn()
    }
    delete context.fn;
    return result;
}

Function.prototype.mybind = function(context){
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    const _this = this
    const args = [...arguments].slice(1)
    return function F(){
        if(this instanceof F){
            return new _this(...args,...arguments)
        }
        return _this.apply(context,[...args,...arguments])
    }
}