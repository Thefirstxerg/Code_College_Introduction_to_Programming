//Getting an element by its ID in the html file
var htmlElement = document.getElementById("myParagraph").innerHTML = "This is <em>your</em> paragraph!";
//Or you can:
var htmlElement = document.getElementById("myParagraph");
htmlElement.innerHTML = "This is <em>your</em> paragraph!";
//If you then go back to the launched webpage, you will see that the text in the paragraph has changed to "This is your paragraph!".

//Button with getElementById  
document.getElementById("nameChangeButton").onclick = getName;
//You need a function in order to fetch the location in the html document you want to change
function getName(){
    document.getElementById("myName").innerHTML = "My name is Ulrich";
}


//Book example
var item1;
var item2;
var item3;

document.getElementById("changeList").onclick = newList;

function newList(){
    item1 = prompt("Enter a new first thing: ");
    item2 = prompt("Enter a new second thing: ");
    item3 = prompt("Enter a new third thing: ");
    updateList();
  }

function updateList(){
    document.getElementById("firstItem").innerHTML = item1;
    document.getElementById("secondItem").innerHTML = item2;
    document.getElementById("thirdItem").innerHTML = item3;
}
