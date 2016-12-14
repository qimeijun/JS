#javascript操作DOM元素
### 创建新节点 
`document.createElement("div")`
```
var newDiv = document.createElement("div");
newDiv.id = "first";
newDiv.className = "firstClass";
var text = document.createTextNode("12345678");
newDiv.appendChild(text);
document.body.appendChild(newDiv);
```


### 节点关系
> 获取父节点 parentNode
```
var divNode = document.getElementById("div2");
var parent = divNode.parentNode;
```

> 获取下一个兄弟节点 nextSibling
```
var mDiv = document.getElementById("div3");
var next = mDiv.nextSibling;
```

> 获取上一个兄弟节点 previousSibling
```
var mDiv2 = document.getElementById("div3");
var previous = mDiv2.previousSibling;
```

> 获取第一个子元素 firstChild
```
var mDiv3 = document.getElementById("div3");
var parent = mDiv3.parentNode;
var first = parent.firstChild;
```

> 获取最后一个子元素 lastChild
```
var mDiv3 = document.getElementById("div3");
var parent = mDiv3.parentNode;
var last = parent.lastChild;
```

> 是否存在节点 hasChildNodes
```
var parent = document.getElementById("div1");
var hasChild = parent.hasChildNodes;
``` 

> 获取节点类型 nodeType
返回一个整数，代表这个节点的类型，1-元素节点，2-属性节点，3-文本节点

> 获取子节点的构成 childNodes
```
var parent = document.getElementById("div1");
var childnode = parent.childNodes;
``` 

###节点操作

> 追加一个子节点 appendChild
```
var parent = document.getElementById("div1");
var addDiv = document.createElement("div");
var text = document.createTextNode("新添加的div");
addDiv.appendChild(text);
parent.appendChild(addDiv);
```

> 插入一个子节点 insetBefore
```
var parent = document.getElementById("div1");
var addDiv = document.createElement("div");
var firstDiv = document.getElementById("div2");
var text = document.createTextNode("新添加的div");
parent.insetBefore(addDiv, firstDiv);
/*插在firstDiv元素前面*/
```

>  替换一个子节点 replaceChild
```
var parent = document.getElementById("div1");
var addDiv = document.createElement("div");
var firstDiv = document.getElementById("div2");
var text = document.createTextNode("新添加的div");
parent.replaceChild(addDiv, firstDiv);
```
> 删除一个子节点 removeChild
```
var parent = document.getElementById("div1");
var firstDiv = document.getElementById("div2");
parent.removeChild(firstDiv);
/*返回删除的元素*/
```

> 克隆一个子节点 cloneNode
```
var firstDiv = document.getElementById("div2");
var clone = firstDiv.cloneNode(true);
```
*如果参数为true，那么该节点的所有元素包括子节点都会被克隆，如果参数为false，那么只克隆节点本身，文本或换行、空格这些都不会复制，因为它们属于textNode*

### 元素选择
> querySelector 
返回一个包含节点子树内所有与之相配的Element节点列表，如果没有相匹配的则返回NULL
```
var el = document.querySelector("#div2, #div3, #div4");
/*都只返回#div2 的元素*/
```

> querySelectorAll
返回节点子树内与之相配的第一个element节点，如果没有匹配，则返回null
```
var special = document.querySelectorAll("p.firstp, div#div3");
```

> getElementById
根据id 获取元素
var idDiv = document.getElementById("div3");


> getElementByTagName
根据标签来获取元素
```
var tagname = document.getElementsByTagName("div");
```

> getElementByClassName
根据class属性来获取元素
```
var classname = document.getElementsByClassName("firstp");
```

> getElementsByName()
根据name属性来获取元素
```
var live = document.getElementsByName("div2");
```

### 属性操作
> 获取元素属性值 getAttribute()
```
var pnode = document.getElementsByClassName("firstp")[0];
var attribute = pnode.getAttribute("only");
``` 

> 设置元素属性值 setAttribute()
```
var pnode = document.getElementsByClassName("firstp")[0];
pnode.setAttribute("title", "i am is a div");
```

> 判断是否有某种属性值 hasAttribute()
```
var pnode = document.getElementsByClassName("firstp")[0];
var hasa = pnode.hasAttribute("title")
```

### 事件

> 添加事件 addEventListener
```
var div = document.getElementById("div2");
div.addEventListener("click", listener, false);
function listener () {
    alert("test");
}
```
第一个参数是事件名，第二个是回调函数，第三个参数为true表示捕获，false表示冒泡

> 解除事件 removeEventListener()
```
div.removeEventListener("click", function () {
    console.log("test");
}, true);
div.onclick = null;
```
**IE8 及以下不支持addEventListener、removeEventListener， IE8绑定事件解除事件使用attachEvent()、detachEvent()**

> 自定义事件 createEvent()
```
var div1 = document.getElementById("div1");
div1.addEventListener("message", function(){
    console.log('test');
}, false);

var div2 = document.getElementById("div2");
div2.addEventListener("message", function(e){
    console.log(this);
    console.log(e);
}, false);
var ev = document.createEvent("Event");
ev.initEvent("message", false, true); // 起泡参数变为true，div1的事件就会触发
div2.dispatchEvent(ev);
```
###获取元素相关计算后的值

> getComputeStyle(), currentStyle()
IE8及以下使用currentStyle(), IE9+及其他标准浏览器用getComputedStyle()
```
var div2 = document.getElementById("div2");
var result = "";
if (window.getComputedStyle) {
    result = (window || document.defaultView).getComputedStyle(div2, null)['cssFloat'];
} else {
    result = div2.currentStyle["styleFloat"];
}
console.log(result);
// document.defaultView返回document对象所关联的window
```
getComputedStyle： IE9以上需要用cssFloat，其他标准的用float<br/>
currentStyle： IE8及以下可用styleFloat或者float

> getBoundingClientRect()、getClientRects()
getBoundingClientRect() 该方法获得页面中某个元素的上、右、下、左分别相对浏览器视窗的位置。<br/>
getBoundingClientRect是DOM元素到浏览器可视范围的距离（到浏览器顶部而不是文档顶部）.<br/>
该函数返回一个Object对象，该对象有6个属性：top,lef,right,bottom,width,height；这里的top、left和css中的理解很相似，width、height是元素自身的宽高，但是right，bottom和css中的理解有点不一样。right是指元素右边界距窗口最左边的距离，bottom是指元素下边界距窗口最上面的距离。<br/>
getClientRects()是返回一个ClientRectList集合。
```
var div1 = document.getElementById("div1");
var rects1 = div1.getClientRects();
var rects2 = div1.getBoundingClientRect();
console.log(rects1[0].top);
console.log(rects2.top);
```
