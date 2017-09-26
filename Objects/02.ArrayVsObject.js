
//Creating object
var myObject = {}; // new Object(); 
myObject.name = "value"; // myObject["name"] = "value"; // var myVar = "name"; myObject[myVar] = "value";
myObject.age = 20; 
console.log(myObject);

//Creating Array
var myArray = []; // new Array();
myArray = ["Index0", "Index1", "Index3"];
//myArray[0] = "index0"; myArray[1] = "index1"; myArray[2] = "index2"; myArray[1] = "index3";
console.log(myArray);
myArray.push("Index4");
console.log(myArray);
myArray.pop()
console.log(myArray);

//Creating Array of Objects
var myArrayObj = []
var myObj = {}
myObj.name = "value1"; myArrayObj.push(myObj);
myObj = {}
myObj.name = "value2"; myArrayObj.push(myObj);
console.log(myArrayObj);

//self executing function here
(function(){
    
    var para1 = document.getElementById("para1");
    var para2 = document.getElementById("para2");
    var para3 = document.getElementById("para3");
    var para4 = document.getElementById("para4");
    var para5 = document.getElementById("para5");
    
    //Accessing Object Properties
    para1.innerHTML = para1.innerHTML + " " +  myObject.name;
    para2.innerHTML = para2.innerHTML + " " +  myObject.age;

    //Accessing Array Index
    para3.innerHTML = para3.innerHTML + " " +  myArray[0];
    //Accessing Array Property
    para4.innerHTML = para4.innerHTML + " " +  myArray.length;
    //Accessing Array Items
    for (var index = 0; index < myArray.length; index++) {
        var element = myArray[index];
        para5.innerHTML += ", " + element;
    }

})();