function Status() {
 var Iden = this.id.replace ("cb_","");
 var text = document.getElementById("item_" + Iden);
 
 if(this.checked){
   text.className = "checked"; 
 }else{ 
  text.style.textDecoration = "none";
 }
}

/*Añadir Lista*/
function addNewItem(list, text){
 totalItem++;

 var listItem = document.createElement("li");   
 var checkbox = document.createElement("input"); 
 checkbox.type = "checkbox";         
 checkbox.id = "cb_" + totalItem;
 checkbox.onclick = Status; 
 
 var span = document.createElement ("span");
 span. id = "item_" + totalItem; 
 span.innerText = text;

/*remove*/
 removeAll = document.getElementById('removeAll');  
 
 removeButton = document.createElement('button')
 removeButton.className = 'removeMe';
 removeButton.innerHTML = 'Listo!';
 removeButton.setAttribute('onclick', 'removeMe(this);');
 
 listItem.appendChild(checkbox);
 listItem.appendChild(span);
 list.appendChild(listItem);
 listItem.appendChild(removeButton);

 removeAll.onclick = function () {
 list.innerHTML = '';
};
}

function removeMe(item){
 var parent = item.parentElement;
 parent.parentElement.removeChild(parent);
}





/*boton*/
var inItemText = document.getElementById("inItemText"); 
inItemText.focus()

var btnNew = document.getElementById('btnAdd');
btnNew.onclick=function(){

 var text = inItemText.value;

 if (text =="" || text == " "){
   return false;
 }
 addNewItem(document.getElementById("todoList"), text);
inItemText.focus();
inItemText.select();
}
var totalItem = 0


