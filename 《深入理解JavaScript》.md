### 一、ToPrimitive()
一般我们在做类型转换时，JavaScript会做这样一个操作， 就我们输入的值转移成一个原始值，然后再将原始值转换成目标类型的值。<br/>
`ESMAScript`提供了这样一个接口`ToPrimitive(input, [PreferredType])`，将我们输入的类型转换成目标类型。<br/>
转换规则：<br/>
可选参数`PreferredType`是`Number`或者是`String`。返回值为任何原始值.如果`PreferredType`是`Number`,执行顺序如下：<br/>
1、如果`input`是原始类型，就直接返回。<br/>
2、否则，`input`是`object`类型，就调用`input.valueOf()`,如果结果是原始值，则返回<br/>
3、否则，就调用`input.toString()`, 如果结果是原始值，则返回<br/>
4、否则，就抛出`TypeError`异常<br/>
