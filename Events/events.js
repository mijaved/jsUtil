//self executing function here
(function(){
    alert("on load");
    //all para elements in the document
    var paras = document.getElementsByTagName("p");
    for (var i = 0; i < paras.length; i++) {
        paras[i].innerHTML = "This is Para " + i.toString();
    }
    alert("Changed paragraphg text using getElementsByTagName()");
})();

window.onload = function(){

    btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", func1);

    btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", func2);
    
    alert("window.onload");
}

document.onload = function(){
    alert("document.onload");
}

function func1(){
    //all elements in the document with class name = para
    var paras = document.getElementsByClassName("para");
    for (var i = 0; i < paras.length; i++) {
        paras[i].innerHTML = "This is Para" + i.toString();
    }
    alert("Changed paragraphg text using getElementsByClassName()");
}

function func2(){
    //all child elements in the document within divTest div element
    var divTest = document.getElementById("divTest");
    var paras = divTest.childNodes;
    for (var i = 0; i < paras.length; i++) {
        paras[i].innerHTML = "This is Para" + i.toString();
    }
    alert("Changed paragraphg text using childNodes");
}