menuListArray = ["Pizza Vegetariana",//adicionar mais itens
                "Pizza carne",
                 "Pizza Argentina",             
                  "Pizza Quatro Queijos",            
                   "Pizza de frango"];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata
}
//Completar o código
}

function addItem(){
var htmldata;
var imgtags= '<img id="img1" src= "imges/pizzaimg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayaddMenu").innerHTML = htmldata
}
//Completar o código
fuction addTop(){
var  item=document.getElementById("additem").value;
menuLIstArray.push(item);
additem();
}


