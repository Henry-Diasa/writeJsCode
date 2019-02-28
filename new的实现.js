function mynew(){
    let obj = {};
    let con = [].shift.call(arguments);
    obj.__proto__ = con.prototype;
    let r = con.call(obj,arguments);
    return r instanceof Object ? r : obj;
}