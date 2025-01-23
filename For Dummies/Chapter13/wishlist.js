let printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

let addButton = document.getElementById("addIt");
let addButton2 = document.getElementById("secondButton");
addButton.addEventListener("click", addTheThing);
addButton2.addEventListener("click", addTheThing);

let myList = [];
let myListArea = document.getElementById("wishList");

function addTheThing() {
    let theThing1 = document.getElementById("iWant");
    let theThing2 = document.getElementById("secondInput");
    //If statement is there to check if the field is empty, if it is, it skips the field.
    if (theThing1.value) {
        addToTheList(theThing1);
        resetInput(theThing1);
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
        myListArea.innerHTML += "<li>" + myList[i] + "</li>";
    }
    window.print();
}