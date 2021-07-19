//深拷贝   （obj1为所要拷贝的对象）
// 浅拷贝只复制对象的第一层属性、深拷贝是对对象的属性进行递归复制。

//方式一：原始版本（obj1为所要拷贝的对象）   
function deepCopy(obj1, obj2){
 for(let key in obj1){// for in 遍历对象可枚举属性，包括其原型的属性和方法， 可用obj1.hasOwnPerporty(key)判断这个实例是否有这个属性
     let item = obj1[key] 
     if(item instanceof Array){ // 不能用typeof  item，因为不能区分对象和数组
         obj2[key] = []
         deepCopy(item, obj2[key])
     }else if(item instanceof Object){
         obj2[key] = {}
         deepCopy(item, obj2[key])
     }else{
         obj2[key] = item
     }
 }
}
//方式一：优化版本（obj为所要拷贝的对象，obj2已经默认为一个对象）
// 思路：1、判断是否是值类型还是引用类型。2、判断是数组还是对象。3、递归
function deepClone(obj){
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
         result[key] = deepClone(obj[key])
     }
 }
 //返回结果
 return result
}
// 缺陷：当遇到两个互相引用的对象，会出现死循环的情况。
//方式二  
function deepCopy(obj1, obj2){
 obj2 = JSON.parse(JSON.stringify(obj1))
}
// 缺陷：这种方法不能拷贝函数属性