var Sergey = /** @class */ (function () {
    function Sergey(age, name) {
        this.age = age;
        this.name = name;
    }
    Sergey.prototype.setAge = function (age) {
        this.age = age;
    };
    Sergey.prototype.setName = function (name) {
        this.name = name;
    };
    return Sergey;
}());
var sergey = new Sergey(24, "Sergey");
console.log(sergey);
