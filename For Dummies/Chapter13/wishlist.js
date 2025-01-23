let printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

let addButton = document.getElementById("addIt");
let addButton2 = document.getElementById("addIt2");
addButton.addEventListener("click", addTheThing);
addButton2.addEventListener("click", addTheThing);


let myList = [];
let myListArea = document.getElementById("wishList");



function addTheThing() {

    let theThing = document.getElementById("iWant");
    let theThing2 = document.getElementById("iWant");

    if (theThing.value) {
        addToTheList(theThing);
        resetInput(theThing);
    }

    if (theThing2.value) {
        addToTheList(theThing2);
        resetInput(theThing2);
    }
}

function addToTheList(thingToAdd) {
    myList.push(thingToAdd.value);
    let newListItem = document.createElement("li");
    newListItem.innerHTML = myList[myList.length - 1];

    myListArea.appendChild(newListItem);
}

function resetInput(inputToReset) {
    inputToReset.value = "";
}

function printView() {
    let listPage = document.getElementById("listPage");
    let formArea = document.getElementById("formArea");

    formArea.style.display = "none";
    listPage.className = "print";
    myListArea.innerHTML = "";
    myList.sort();

    for (let i = 0; i < myList.length; i++) {
        wishList.innerHTML += "<li>" + myList[i] + "</li>";
    }
    window.print();
}