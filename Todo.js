let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let clearList = document.getElementById('clearList');

addToDoButton.addEventListener('click', function() {
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = '';
  // alert('item has been added');
  paragraph.addEventListener('click', function () {
    paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener('dblclick', function () {
    var areYouSure = prompt("Are you sure you want to delete this item?");
    if (areYouSure === "Yes" || areYouSure == "Ya" || areYouSure == "yes" || areYouSure == "ya") {
    toDoContainer.removeChild(paragraph);
    } else {}
  })
  clearList.addEventListener('click', function() {
    var areYouSuperSure = prompt("Are you sure you want to clear this list?");
    if (areYouSuperSure == "Yes" || areYouSuperSure == "Ya" || areYouSuperSure == "yes" || areYouSuperSure == "ya") {
    toDoContainer.innerHTML = '';
  } else {}
  })
})


// let addToDoButton = document.getElementById('addToDo');
// let toDoContainer = document.getElementById('toDoContainer');
// let inputField = document.getElementById('inputField');
//
// addToDoButton.addEventListener('click', toDoThing())
//
// function containerThing() {
//   toDoContainer.removeChild(containerThing.caller);
// }
//
// function toDoThing() {
//   var paragraph = document.createElement('p');
//   paragraph.classList.add('paragraph-styling');
//   paragraph.innerText = inputField.value;
//   toDoContainer.appendChild(paragraph);
//   inputField.value = '';
//   paragraph.addEventListener('click', function () {
//     paragraph.style.textDecoration = "line-through";
//   })
//   paragraph.addEventListener('dblclick', containerThing())
// }
