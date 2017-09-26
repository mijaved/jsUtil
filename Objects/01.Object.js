//Person Variable
var personNameVar = "John Doe";
console.log(personNameVar);
//=================================================================================
//Create object: Using the JavaScript Keyword new
var PersonObj = new Object(); //var PersonObj = {}; 
var propName = "name"; PersonObj[propName] = "John Doe"; //way1 of assign property value
PersonObj["name"] = "John Doe"; //way2 of assign property value
PersonObj.name = "John Doe"; //way3 of assign property value
PersonObj.age = 21;
PersonObj.dob = new Date();
console.log(PersonObj);
//=================================================================================
//Create object: Using an Object Literal
var PersonObj2 = { name: "PersonObj2 Name", age: 21, dob: new Date()};
console.log(PersonObj2);
//=================================================================================
//Create object: Using an Object Constructor
function PersonObj3(name, age, dob) {
    this.name = name;
    this.age = age;
    this.dob = dob;
}
//Create instance of object: Using an Object Constructor
var fatherObj = new PersonObj3("Father", 60, new Date(year=1950, month=1, date=1));
console.log(fatherObj);
var motherObj = new PersonObj3("Mother", 55, new Date(year=1955, month=1, date=1));
console.log(fatherObj);
//=================================================================================
//self executing function here
(function(){
    console.log(PersonObj.name);
    console.log(PersonObj["age"]);
    
    var para1 = document.getElementById("para1");
    var para2 = document.getElementById("para2");

    para1.innerHTML += PersonObj.name;
    para2.innerHTML += PersonObj.age;
})();
