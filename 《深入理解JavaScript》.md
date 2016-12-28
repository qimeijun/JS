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
