
window.onload = function(){
    var para = document.createElement("p");
    var txt1 = document.createTextNode("This is ");
    var emphasis = document.createElement("em");
    var txt2 = document.createTextNode("my"); var txt3 = document.createTextNode(" content.");  var testdiv = document.getElementById("testdiv");
    para.appendChild(txt1);
    emphasis.appendChild(txt2);
    para.appendChild(emphasis);

    para.appendChild(txt3);

    testdiv.appendChild(para);


}