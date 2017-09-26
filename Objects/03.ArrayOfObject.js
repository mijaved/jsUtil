data = [
    { name: "Name1", age: 21, child: { name: "Child Name1", age: 1}},
    { name: "Name2", age: 22, Multichild: [{ name: "Child Name1", age: 1}, { name: "Child Name2", age: 2}]},
    { name: "Name3", age: 23},
    { name: "Name4", age: 24},
];
// console.log(data);
// console.log(data[0].name);
// console.log(data[1].Multichild[1].name);

//self executing function here
(function(){
        
    var para1 = document.getElementById("para1");
    var para2 = document.getElementById("para2");
    var para3 = document.getElementById("para3");
    var para4 = document.getElementById("para4");

    for (let item of data) {
        //console.log(item); // Will display contents of the object inside the array
    }

    //Accessing Array of Objects
    data.forEach(function(element) {
        para1.innerHTML = para1.innerHTML + ", " +  element.name;
        para2.innerHTML = para2.innerHTML + ", " +  element.age;
        if(element.child) {
            para3.innerHTML = para3.innerHTML + ", " +  element.child.name;
        }
        
        //Accessing child array of objects
        if(element.Multichild) {
            element.Multichild.forEach(function(a) {
                console.log(a);
                para4.innerHTML = para4.innerHTML + ", " +  a.name;
            });
        }

    }, this);
})();
