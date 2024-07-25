const inputBox = document.getElementById("input-box");
const listContanier = document.getElementById("list-contanier");
function addtask() {
 if(inputBox.value == ''){
    alert("You must write Something !");
 }
 else{
   let li =document.createElement("li");
   li.innerHTML =inputBox.value;
   listContanier.appendChild(li);
   let span= document.createElement("span");
   span.innerHTML = "\u00d7";
   li.appendChild(span) 
 }
inputBox.value="";
saveData();
}

