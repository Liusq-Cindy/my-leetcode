//浅拷贝   （obj1为所要拷贝的对象）
// 浅拷贝只复制对象的第一层属性、深拷贝是对对象的属性进行递归复制。
//方式一：原始版本（obj1为所要拷贝的对象，obj2已经默认为一个对象）
function shallowCopy(obj1, obj2){
 for(let key in obj1){
     obj2[key] = obj1[key]
 }
}
//方式一：优化版本（obj为所要拷贝的对象）
function shallowClone(obj){
 if(typeof obj !== 'object' || obj == null){
     //obj是null，或者不是对象和数组，直接返回
     return obj
 }
 let result
 if(obj instanceof Array){
     result = []
 }else{
     result = {}
 }
 for(let key in obj){// for in 遍历对象可枚举属性，包括其原型的属性和方法， 
     if(obj.hasOwnProperty(key)){ //保证key不是原型的属性
         //递归调用
         result[key] = obj[key]
     }
 }
 //返回结果
 return result
}
//方式二
function shallowCopy(obj1, obj2){
 obj2 = Object.assign({}, obj1)
}