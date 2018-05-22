function createTable1() {
    makeTable = document.getElementById("makeTable");
    var tableOneDiv;
    if () {
        tableName = document.createElement("input");
        tableName.setAttribute("type", "text");
        tableName.setAttribute("placeholder", "table name");
        columnNumber = document.createElement("input");
        columnNumber.setAttribute("type", "number");
        columnNumber.setAttribute("placeholder", "column number");
        columnNumber.addEventListener("input", createTableHead, false);
          tableOneDiv = document.createElement("div");
        tableOneDiv.appendChild(tableName);
        tableOneDiv.appendChild(columnNumber);
        makeTable.appendChild(tableOneDiv);
    }
    else{
        tableName.value="";
        columnNumber.value="";
        inputAttribute.innerHTML="";
    }
}
function createTableHead() {
     inputAttribute = document.createElement("div");
     makeTable.appendChild(inputAttribute);
    var columns = columnNumber.value;
     attribute =new Array();
   if(columns > 0){
       for(var i = 0;i < columns;i++){
           attribute[i] = document.createElement("input");
           attribute[i].setAttribute("type","text");
           attribute[i].setAttribute("placeholder","attribute");
           inputAttribute.appendChild(attribute[i]);
           }
   }
   var selectTwo = document.getElementById("selectTwo");

   commitDiv = document.createElement("div");
   makeTable.appendChild(commitDiv);
   makeTable.appendChild(commitDiv);
   commit = document.createElement("input");
   commit.setAttribute("type","button");
   commit.setAttribute("value","commit");
   commit.addEventListener("click",showTableNameAndHead,false);
   commitDiv.appendChild(commit);

}
var tableArray =Array();
function showTableNameAndHead() {
    for(var k = 0;k<tableArray.length;k++){
        tableArray[i].style.display = "none";
    }
    option = document.createElement("option");
    optionTxt = document.createTextNode(tableName.value);
    option.appendChild(optionTxt);
    var selectTwo = document.getElementById("selectTwo");
    selectTwo.appendChild(option);
    option.setAttribute("selected","selected");

    table = document.createElement("table");
    tableArray.push(table);
    tableDisplay = document.getElementById("tableDisplay");
    tableDisplay.appendChild(table);
    tr1 = document.createElement("tr");
    table.appendChild(tr1);
    for(var i = 0;i < attribute.length;i++){
        th = document.createElement("th");
        thTxt = document.createTextNode(attribute[i].value);
        th.appendChild(thTxt);
        tr1.appendChild(th);
    }


}

var tBodies = this.table.tBodies[0];
for(var i = 0;i < tBodies.length ; i++){
    var flag = true;
    for(var k = 0 ; k< tBodies.childNodes.length;i++){
        if(tBodies.childNodes[i].childNodes[k].innerText !== list[k] && list[k] !== "")
            flag = true;
        break;
    }
    if(flag){
        tBodies.removeChild(tBodies.childNodes[i]);
    }
}