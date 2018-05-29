
function select() {
    var index = document.form.select.selectedIndex;
    switch(index){
        case 0:
            selectOne();
            break;
        case 1:
            createTable();
            break;
        case 2:
            addRow();
            break;
        case 3:
            deleteRow();
            break;
        case 4:
            deleteTable();
            break;
        default:
            break;
    }
}
function selectOne() {
    document.getElementById("inputCreate").innerHTML="";
    document.getElementById("inputAttr").innerHTML="";
    document.getElementById("commit").style.display = "none";
    document.getElementById("table").innerHTML="";

}
function createTable() {
    var inputCreate = document.getElementById("inputCreate");
    document.getElementById("inputAttr").innerHTML = "";
   document.getElementById("table").innerHTML="";
   document.getElementById("select2").options[0].selected = true;
    inputCreate.innerHTML="<input type='text' placeholder='table name' id='tableName'><input type='number' placeholder='column number' id='colNum'> ";
    document.getElementById("colNum").addEventListener("input",createTableHead,false);
}

function createTableHead() {
    document.getElementById("inputAttr").innerHTML = "";
    var inputAttr = document.getElementById("inputAttr");
    if(document.getElementById("colNum").value > 0){
        for(var i= 0; i<document.getElementById("colNum").value;i++){
            inputAttr.innerHTML += "<input type='text' placeholder='attribute' class='attr'>";
        }
        document.getElementById("commit").style.display = "inline-block";
    }
    document.getElementById("commit").onclick = tableAttr;
}
var tables = Array();

function tableAttr() {
    var name = document.getElementById("tableName").value;
    var colnum = document.getElementById("colNum").value;
     var col = document.getElementsByClassName("attr");
     var tableAttr = Array();
     for(var i = 0 ; i < colnum ;i++){
         tableAttr.push(col[i].value);
     }

var table = new Table(name,colnum,tableAttr);
tables.push(table);
renewTable(table.table);

var option = document.createElement("option");
option.innerText = name;
option.selected = true;
document.getElementById("select2").appendChild(option);
}
function renewTable(table) {
    document.getElementById("table").innerHTML = "";
    document.getElementById("table").appendChild(table);
}
function addInputRow(){
    document.getElementById("commit").style.display = "inline-block";
    document.getElementById("inputCreate").innerHTML="";
    document.getElementById("inputAttr").innerHTML="";
    var table =tables[document.form.select2.selectedIndex - 1] ;
    for(var i = 0 ; i < table.colnum;i++){
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = table.tableAttr[i];
        document.getElementById("inputCreate").appendChild(input);
    }
}
function addRow() {
addInputRow();
    document.getElementById("commit").onclick= function () {
        var table =tables[document.form.select2.selectedIndex - 1] ;
table.addRow1(getInput());
renewTable(table.table);
    }
}
function deleteRow(){
addInputRow();
document.getElementById("commit").onclick=function () {
    var table =tables[document.form.select2.selectedIndex - 1] ;
    table.deleteRow1(getInput());
renewTable(table.table);
}
}
function getInput(){
    var list = Array();
    var inputs = document.getElementById("inputCreate");
    for(var i of inputs.childNodes){
        list.push(i.value);
    }
    return list;
}
function deleteTable() {
    alert("WARNING:you cannot undo this action!");
    document.getElementById("commit").style.display="inline-block";
    document.getElementById("inputCreate").innerHTML="";
    document.getElementById("inputAttr").innerHTML="";
    document.getElementById("commit").onclick = function (ev) {
        if(document.form.select2.selectedIndex === 0 ){
           return;
        }
        else{
            tables.splice(document.form.select2.selectedIndex - 1,1);
            document.getElementById("table").innerHTML="";
            document.getElementById("select2").removeChild(document.getElementById("select2").options[document.form.select2.selectedIndex]);
            document.getElementById("select2").options[0].selected = true;
        }
        }
}
class Table {
    constructor(name,colnum,tableAttr){
        this.name = name;
        this.colnum = colnum;
        this.tableAttr = tableAttr;
        this.table = document.createElement("table");
        //创建table节点的tHead节点
        var th = this.table.createTHead();
        var tr = document.createElement("tr");
        var newCell;
        for(var i = 0;i < this.colnum;i++){
            newCell = tr.insertCell(i);
            newCell.innerText = this.tableAttr[i];
        }
        th.appendChild(tr);
        //创建table节点的tBody节点
        this.table.createTBody();
        }
        addRow1(list){
        var newRow = this.table.tBodies[0].insertRow(this.table.length);
        var newCell;
        for(var i = 0;i<this.colnum;i++){
            newCell = newRow.insertCell(i);
            newCell.innerText = list[i];
        }
        if(this.table.tBodies[0].childNodes.length % 2 === 0){
            newRow.className = "single";
        }
        }
        deleteRow1(list){
        var trNumber = this.table.tBodies[0].childNodes.length;
        var i = 0;
            while (i < trNumber) {
            var r = this.table.tBodies[0].childNodes[i];
                var flag = true;
                for (var c = 0; c < list.length; c++) {
                    if (!(list[c] === (r.childNodes[c]).innerText || list[c] === "")) {
                        flag = false;
                        break;
                    }
                }
                if (flag)
                    this.table.tBodies[0].removeChild(r);
                    i = i + 1;
                }
            }

        }


document.getElementById("commit").style.display = "none";
document.getElementById("select").addEventListener("change",select,false);
document.form.select2.onchange = function () {
    if(document.form.select2.selectedIndex === 0){
        document.getElementById("table").innerHTML = "";
    }
    else{
        var table = tables[document.form.select2.selectedIndex - 1];
        renewTable(table.table);
    }
}