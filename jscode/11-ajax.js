
// 手写ajax请求

//get
let xhr = new XMLHttpRequest() //1、创建连接
xhr.open('GET', url, true) //2、连接服务器
xhr.onreadystatechange = function () { //4、接收请求，当状态改变时触发这个函数
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {//xhr.responseText是字符串需转换为JSON
            success(JSON.parse(xhr.responseText))
        } else {
            fail(xhr.status)
        }
    }
}
xhr.send(null) //3、发送请求
//post
let xhr = new XMLHttpRequest() //1、创建连接
const postData = {
    userName: 'zhangshan',
    passWord: 'xxx'
}
xhr.open('POST', url, true) //2、连接服务器
xhr.onreadystatechange = function () { //4、接收请求，当状态改变时触发这个函数
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {//xhr.responseText是字符串需转换为JSON
            success(JSON.parse(xhr.responseText))
        } else {
            fail(xhr.status)
        }
    }
}
xhr.send(JSON.stringify(postData)) //3、发送请求(需发送字符串，将json转化成字符串)
//promise优化
function ajax(url) {
 return new Promise((resolve, reject) => {
     let xhr = new XMLHttpRequest() //1、创建连接
     xhr.open('GET', url, true) //2、连接服务器
     xhr.onreadystatechange = function () { //4、接收请求，当状态改变时触发这个函数
         if (xhr.readyState === 4) {
             if (xhr.status === 200) {//xhr.responseText是字符串需转换为JSON
                 resolve(JSON.parse(xhr.responseText))
             }else if(xhr.status === 404){
                 reject(new Error('404'))
             }
         }
     }
     xhr.send(null) //3、发送请求
 })
} 
const url = ''
ajax(url)
.then(res => console.log(JSON.parse(xhr.responseText)))
.catch(err => console.log(err))