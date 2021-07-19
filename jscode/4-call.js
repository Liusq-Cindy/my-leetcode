// js手写实现一个call

// call方法：在使用一个指定的this和若干个指定的参数值的前提下调用某个函数或方法
// 使用 call() 方法，您可以编写能够在不同对象上使用的方法。

var person = {
 fullName: function(city, country) {
   return this.firstName + " " + this.lastName + "," + city + "," + country
 }
}

var person1 = {
 firstName:"Bill",
 lastName: "Gates"
}
// 调用 person 的 fullName 方法，并用于 person1：
person.fullName.call(person1, "Seattle", "USA");   //Bill Gates,Seatle,USA

// 手写实现一个call方法
Funcion.protoType.mockCall = function (context = window, ...args) {
	const key = Symbol()
	context[key] = this
	const result = context[key](...args)
	delete context[key]
	return result
}