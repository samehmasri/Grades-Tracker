'use strict'

var table = document.getElementById('table');
var form = document.getElementById('form');

var headerArray = ['Student Name','Student Grade','Course']

function student (studentName,course){
    this.name = studentName;
    this.course = course;
    this.grade = getRandomNumber();
    student.prototype.allStudent.push(this);
}
student.prototype.allStudent = [];

student.prototype.render = function (){
    var row = document.createElement('tr');

    var studentNameTable = document.createElement('td');
    studentNameTable.textContent=this.name;
    row.appendChild(studentNameTable);

    var courseTable = document.createElement('td');
    courseTable.textContent=this.course;
    row.appendChild(courseTable);

    table.appendChild(row);

}

if (localStorage.getItem('savedArray'))
var ls = JSON.parse(localStorage.getItem('savedArray'));
for (let index = 0; index < ls.length; index++) {
    var z = new student(ls[index].studentName,ls[index].course);
    z.render();
}



/ I forget how to target the value I am really confused I will try to continue with knowing how 
form.addEventListener("click", createObject)

function createObject(event){
    event.preventDefault();
    var studentNameValue = event.target.value.studentName;////wrong 
    var courseValue = event.target.value.course;////forget how to target 
    var x = new student (studentNameValue,courseValue);
    localStorage.setItem('savedArray',JSON.stringify(student.prototype.allStudent));
    x.render();

    
}

function createHeader(){
    var headerRow = document.createElement('tr');
    var th;
    for (let index = 0; index < headerArray.length; index++) {
        th = document.createElement('th');
        th.textContent = headerArray[index];
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);
}
function getRandomNumber() {
    return Math.floor(Math.random() * (100 - 0) + 0)
}
createHeader();