Function.prototype.myApply = function(context, args) {
 const key = Symbol();
 context[key] = this;
 const fn = context[key](...args);
 delete context[key];
 return fn;
}

// **方法或函数fun.apply(obj, [参数1，参数2，...])，改变this指向到obj，立即执行方法fun**

// apply接受两个参数，第一个参数是要**绑定给this的值**，第二个参数是一个**参数数组。**apply和call实现类似，不同的就是参数的处理


Function.protoType.mockApply = function (context = window, args) {
	const key = Symbol()
	context[key] = this
	const result = context[key](...args)
	delete context[key]
	return result
}