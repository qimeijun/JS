### 一、ToPrimitive()
一般我们在做类型转换时，JavaScript会做这样一个操作， 就我们输入的值转移成一个原始值，然后再将原始值转换成目标类型的值。<br/>
`ESMAScript`提供了这样一个接口`ToPrimitive(input, [PreferredType])`，将我们输入的类型转换成目标类型。<br/>
转换规则：<br/>
可选参数`PreferredType`是`Number`或者是`String`。返回值为任何原始值.如果`PreferredType`是`Number`,执行顺序如下：<br/>
1、如果`input`是原始类型，就直接返回。<br/>
2、否则，`input`是`object`类型，就调用`input.valueOf()`,如果结果是原始值，则返回<br/>
3、否则，就调用`input.toString()`, 如果结果是原始值，则返回<br/>
4、否则，就抛出`TypeError`异常<br/>

### 二、undefined与null
undefined与null都属于空置类型，我感觉这两个值没有什么区别。 在条件语句中都会自动转换成false。<br/>
历史由来：刚开始，null完全是参照C语言、Java语言，设置null表示“空”值。 null在Java中被当成一个对象，而在JavaScript中，数据类型分为两种原始类型和对象，**Brendan Eich觉得表示"无"的值最好不是对象**。<br/>
其次，JavaScript刚开始的时候是没有异常处理机制的，如果发现数据类型不匹配的时候，就会隐士的强制性转换数据类型，或者默默的失败。Brendan Eich觉得，如果null自动转为0，很不容易发现错误。<br/>
所有又设计了一个undefined。<br/><br/>
JavaScript的最初版本是这样区分的：null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。<br/>
但是这样的区分在实践中不可行，目前两者虽然同义，但是又有点细微的差别：**null表示"没有对象"，即该处不应该有值。undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义**<br/><br/>
null 典型用法：
```
（1） 作为函数的参数，表示该函数的参数不是对象。
（2） 作为对象原型链的终点。
```
undefined典型用法：
```
（1）变量被声明了，但没有赋值时，就等于undefined。
（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
（3）对象没有赋值的属性，该属性的值为undefined。
（4）函数没有返回值时，默认返回undefined。
```

### switch...case 条件语句
```
switch (fruit) {
  case 'apple':
  case 'banana':
  break;
  case 'orange':
  break;
  default:
}
```
case 后面可以跟数字类型、字符串类型、甚至是表达式。case 条件比较是使用严格比较模式（===）。

### 函数
函数的声明方式：<br/>
1、函数式定义：
```
function funcname () {}
```
2、函数表达式：
```
var add = function () {};
```
具名函数式声明：
```
var add = function getAdd (n) {
  if (n > 0) {
    return n * getAdd(n-1);
  } else {
    return n;
  }
}
// 具名函数式的名字只能在函数内部访问，如getAdd() 在外部访问就会抛出异常
```
3、函数构造器
```
var add = new Function ('x', 'y', 'return x + y');
```

### IIFE
因为**JavaScript中只有函数可以产生新的作用域，而代码块在作用域中是不起作用的**， 如果要开启一个新的作用域，除了建立函数就是使用IIFE模式了。
```
(function () { // open block
statements;

}()); // close block， 结尾分号必须写，否则会出现一些问题
```
Ben Alman 将这种模式称之为*函数表达式*。<br/>
特点：<br/>
1、是立即执行。<br/>
2、必须是一个表达式<br/>
3、别忘了后面的分号。<br/>
IIFE 变体
```
var x = 23;
(function (twice) {
  console.log(twice); //  输出结果为46
} (x * 2));

// 上面代码相当于：
var x = 23;
(function () {
  var twice = x * 2;
  console.log(twice);
}());
```


### this
`this`是方法和函数中的隐式参数。<br/>
1、在宽松模式下，函数中的this指的是全局(window) 对象<br/>
2、在严格模式下，函数中的this总是undefined<br/>
3、在对象的方法中，this指的就是方法所在的对象。

### 对象
####1、单一对象
```
var jane  = {
  name: 'jane',
  descibe: function () {
    return 'Person named '+ this.name;
  }
}
```
####2、对象间的原型关系
两个对象之间的原型关系类似继承：每个对象都可以把另一个对象作为他的原型，并继承原型的所有属性。
```
var proto = {
  describe: function () {
    return 'name:'+ this.name;
  }
}
var obj = {
  [[Prototype]]: proto,
  name: 'obj'
}

// 对象obj从proto 继承了describe 属性。proto 就是obj 的原型。
// 指定obj的原型为proto的原型
var obj = Object.create(proto);
```

####3、实例工厂的构造函数
####4、构造函数之间的继承
```
// 给定一个构造函数Super, Sub 继承构造函数Super, Sub 继承了Super的所有属性、原型属性和实例属性。
function Sub (prop1, prop2, prop3, prop4) {
  Super.call(this, prop1, prop2);
  this.prop3 = prop3;
  this.prop4 = prop4;
}

// 或者可以这样
Sub._super = Super.prototype;
function Sub(prop1, prop2, prop3, prop4) {
  Sub._super.constructor.call(this, prop1, prop2);
  this.prop3 = prop3;
  this.prop4 = prop4;
}
```
通过new条用Sub时，它的隐式参数this指向一个新的实例， 它首先把实例传给Super，Super添加自己的实例属性，之后，Sub设置它自己的实例属性，该技巧是，不要通过new调用Super，因为这样会创建一个新的Super实例，相反，我们把Super作为普通函数调用，并传递当前（Sub）实例作为this的值。
