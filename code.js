function Student(name, surname, dateOfBirth) {
    this.presentArr = new Array (30);
    this.markArr = new Array (30);

    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
}

Student.prototype._arrIndexCheck = function (arr) {
    return arr.findIndex( (el) => el === undefined);
}

Student.prototype._getAverage = function (arr) {
    return arr.reduce( (acc, el) => acc + el ) / arr.length;
}

Student.prototype.getAge = function () {
    const date = new Date;
    return date.getFullYear() - this.dateOfBirth;
}

Student.prototype.present = function() {
    const index = this._arrIndexCheck(this.presentArr);
    if (index !== -1)
        this.presentArr[index] = true;
}

Student.prototype.absent = function() {
    const index = this._arrIndexCheck(this.presentArr);
    if (index !== -1)
        this.presentArr[index] = false;
}

Student.prototype.mark = function (mark) {
    const index = this._arrIndexCheck(this.markArr);
    if (index !== -1 && mark >= 0 && mark <= 10)
        this.markArr[index] = mark;
}

Student.prototype.averageMark = function () {
    return this._getAverage(this.markArr);
}

Student.prototype.averagePresence = function () {
    return this._getAverage(this.presentArr);
}

Student.prototype.summary = function () {
    const averageMark = this.averageMark();
    const averagePresence = this.averagePresence();
    let summary;
    if (averageMark > 9 && averagePresence > 0.9) {
        summary = 'Good';
    } else if (averageMark < 9 || averagePresence < 0.9) {
        summary = 'Normal';
    } else {
        summary = 'Bad';
    }
    return summary;
}
//проверка
const student1 = new Student('NoName', 'NoSurname', 1995)
student1.present()
student1.absent()
student1.present()
student1.mark(10)
student1.mark(55)
student1.mark(0)
student1.mark(5)
console.log( student1.averageMark() )
console.log( student1.averagePresence() )
console.log( student1.getAge() )
console.log( student1.summary() )
console.log(student1)