// # 原型继承（寄生组合继承）


// 这里只写寄生组合继承了，中间还有几个演变过来的继承但都有一些缺陷
function Parent() {
  this.name = 'parent';
}
function Child() {
  Parent.call(this);
  this.type = 'children';
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
