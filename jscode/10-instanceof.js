 // js手写一个instanceof j检测数据类型
// A(实例对象) instanceof B(构造函数)。

// left表示要检测的数据，right表示类型。其原理是用原型链实现的，
function instanceof(left, right){
    let proto = left._proto_
    let prototype = right.prototype
    while(true){
        if(proto === null) return false
        if(proto === prototype) return true
        proto = proto._proto_
    }
}