function Student(name, surname, dateOfBirth) {
    this._presentArr = new Array (30);
    this._markArr = new Array (30);

    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;

    this._arrIndexCheck = function (arr) {
        return arr.findIndex( (el) => el === undefined);
    }

    this._getAverage = function (arr) {
        return arr.reduce( (acc, el) => acc + el ) / arr.length
    }

    this.getAge = function () {
        const date = new Date;
        return date.getFullYear() - this.dateOfBirth;
    }

    this.present = function() {
        const index = this._arrIndexCheck(this._presentArr);
        if (index !== -1)
            this._presentArr[index] = true;
    }

    this.absent = function() {
        const index = this._arrIndexCheck(this._presentArr);
        if (index !== -1)
            this._presentArr[index] = false;
    }

    this.mark = function (mark) {
        const index = this._arrIndexCheck(this._markArr);
        if (index !== -1 && mark >= 0 && mark <= 10)
            this._markArr[index] = mark;
    }

    this.averageMark = function () {
        return this._getAverage(this._markArr);
    }

    this.averagePresence = function () {
        return this._getAverage(this._presentArr);
    }

    this.summary = function () {
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