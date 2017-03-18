function Person() {
    var args = arguments;
    if (typeof args[0] === 'object' && args[0]) {
        if (args[0].name) this.name = args[0].name;
        if (args[0].age) this.age = args[0].age;
    } else {
        if (args[0].name) this.name = args[0].name;
        if (args[0].age) this.age = args[0].age;
    }
}

Person.prototype.toString = function () {
    return 'name=' + this.name + ', age = ' + this.age;
}
var tom = new Person('tom', 27);
console.log(tom.toString());

var rose = new Person({name: 'rose', age: 27});
console.log(rose.toString());
