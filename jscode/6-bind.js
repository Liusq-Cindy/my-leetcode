// 手写实现一个bind
Function.prototype.myBind = function(context=window, ...initArgs) {
 const foo = this;
 var bindFoo = function(...args) {
  if(this instanceof bindFoo) {
   return new foo(...initArgs, ...args);
  } else {
   return foo.call(context, ...initArgs, ...args);
  }
 }
 return bindFoo
}

// Function.prototype.bind 第一个参数是**this的指向**，从第二个参数开始是**接收的参数列表**。和call的区别在于bind方法返回值是函数以及bind接收的参数列表的使用。

// 实现思路：

// - 利用闭包保存调用bind时的this，这时的this就是原函数
// - 使用call/apply指定this
// - 返回一个绑定函数
// - 当返回的绑定函数被new运算符调用的时候，绑定的上下文指向new运算符创建的对象
// - 将绑定函数的prototype修改为原函数的prototype

Function.protoType.mockBind = function (context = window, ...initArgs) {
	const foo = this
	var bindFoo = function (...args) {
		if(this instanceof bindFoo){
      return new foo(...initArgs, ...args)
    }
		return foo.call(context, ...initArgs, ...args)
	}
	return bindFoo
}
或
// 参考：https://www.cnblogs.com/BoatGina/p/11220731.html
Function.prototype.mybind = function (context = window, ...argus) {
 const fn = this
 const fBound = function (...argus2) {
 // 判断是否是new调用，整合传参
     return fn.apply(this instanceof fBound ? this : context, [...argus, ...argus2])
 }
 fBound.prototype = Object.create(this.prototype)
// mybind 执行后返回的函数fBound修改prototype的时候，不应该影响到fn.prototype，两者应该是独立的。
 // 所以源码使用了fBound.prototype = Object.create(this.prototype)， 而不是fBound.prototype = this.prototype。
 return fBound
}

// 其他版本：
// 版本一：不支持传参
Function.prototype.mockBind = function(ctx){
    let fn = this
    return function(){
        fn.apply(ctx)
    }  
}

// 版本二：处理参数
Function.prototype.bind_ = function (ctx) {
    //第0位是this，所以得从第一位开始裁剪
    var args = Array.prototype.slice.call(arguments, 1);
    var fn = this;
    return function () {
        fn.apply(ctx, args);
    };
};
// 版本三：支持柯里化
Function.prototype.bind_ = function (ctx) {
    //第0位是this，所以得从第一位开始裁剪
    var args = Array.prototype.slice.call(arguments, 1);
    var fn = this;
    return function () {
        //二次调用我们也抓取arguments对象
        var params = Array.prototype.slice.call(arguments);
        //注意concat的顺序
        fn.apply(ctx, args.concat(params));
    };
};
// 版本四：完整实现，
Function.prototype.bind_ = function (obj) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    };
    var args = Array.prototype.slice.call(arguments, 1);
    var fn = this;
    //创建中介函数
    var fn_ = function () {};
    var bound = function () {
        var params = Array.prototype.slice.call(arguments);
        //通过constructor判断调用方式，为true this指向实例，否则为obj
        fn.apply(this.constructor === fn ? this : obj, args.concat(params));
        console.log(this);
    };
    fn_.prototype = fn.prototype;
    bound.prototype = new fn_();
    return bound;
};