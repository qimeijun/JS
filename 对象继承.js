function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.hi = function() {
    console.log("Hi, my name is " + this.name + ", I'm " + this.age + "years old now");
}
Person.prototype.LEGS_NUM = 2;
Person.prototype.ARMS_NUM = 2;
Person.prototype.walk = function () {
    console.log(this.name + "is walking...");
}

function Student(name, age, className) {
    Person.call(this, name, age); // 继承Person
    this.className = className;
};

// 创建一个对象，并且原型指向Person.prototype，并将它赋值给Student.prototype
Student.prototype = Object.create(Person.prototype); 
Student.prototype.constructor = Student;

Student.prototype.hi = function () {
    console.log("Hi, my name is " + this.name + ", I'm " + this.age + " years old now, and from " + this.className + ".");
}

Student.prototype.learn = function (subject) {
    console.log(this.name + ' is learning' + subject + ' at ' + this.className + '.');
}
var bosn = new Student('Bosn', 27, 'Class 2 Grade 2');
bosn.hi();
bosn.LEGS_NUM;
bosn.walk();
bosn.learn("math");
