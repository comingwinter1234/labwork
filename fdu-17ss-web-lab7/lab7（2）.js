



function select() {
    var index = document.form.select.selectedIndex;
    alert(index);
    switch(index){
        case 0:
            selectOne();
            break;
        case 1:
            createTable();
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
    }
}
function selectOne() {
    document.getElementById("content").innerHTML="";
    document.getElementById("commit").style.display = "none";

}
function createTable() {
    var content = document.getElementById("content");
    content.innerHTML="<input type='text' placeholder='table name'><input type='number' placeholder='column number' id='colNum'> ";
    document.getElementById("colNum").addEventListener("input",createTableHead,false);
    document.getElementById("commit").style.display = "block";

}
function createTableHead() {
    if(document.getElementById("colNum").value > 0){
        content.innerHTML +="<div id='attributes'>";
        for(var i= 0; i<document.getElementById("colNum").value;i++){
            content.innerHTML += "<input type='text' placeholder='attribute'>";
        }
        content.innerHTML += "</div>";
    }
}
document.getElementById("commit").style.display = "none";
document.getElementById("select").onchange = select;