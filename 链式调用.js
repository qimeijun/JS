function ClassManager () {}
ClassManager.prototype.addClass = function (str) {
    console.log('class:' + str + 'added');
    return this;
}
var manager = new ClassManager();
manager.addClass("classA").addClass("classB").addClass("classC");


console.log("==============defineProperty==================");
function Person(name) {
    Object.defineProperty(this, "name", {value: name, enumerable: true});
}
Object.defineProperty(Person, 'ARMS_NUM', {value: 2, enumerable: true});
Object.seal(Person.prototype);
Object.seal(Person);
function Student(name, className) {
    this.className = className;
    Person.call(this, name);
};
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
