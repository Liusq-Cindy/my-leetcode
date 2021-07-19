// js手写系列 new

// 正常使用new
function Dog(name){
 this.name = name
}

Dog.prototype.sayName = function(){
 console.log(this.name)
}

var dog = new Dog('小狗')
dog.sayName();

// 自己手写new
function Dog(name){
 this.name = name
}

Dog.prototype.sayName = function() {
 console.log(this.name)
}

function _new(fn, ...args) {
 const obj = Object.create(fn.prototype) // 创建一个空对象
 const rel = fn.apply(obj, args) // 修改obj.__proto__=Dog.prototype
 return rel instanceof Object ? rel : obj // 如果fn返回的是null或undefined(也就是不返回内容),我们返回的是obj,否则返回rel
}

var _newDog = _new(Dog, '这是用_new出来的小狗')
_newDog.sayName()


