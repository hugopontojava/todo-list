let myTaskList = document.getElementsByTagName('li');
let strg = localStorage; // TODO: use localStorage
let i;

// * Check and uncheck tasks
let list = document.getElementById('ulList');

list.addEventListener('click', function (ev) {
  ev.target.classList.toggle('checked');
})

// * Add tasks
let btn = document.getElementsByClassName('btn_add');
btn[0].addEventListener('click', function () {
  let inputValue = document.getElementById('inputBox').value;
  let li = document.createElement('li');
  let txt = document.createTextNode(inputValue.charAt(0).toUpperCase() + inputValue.slice(1))    
  
  li.appendChild(txt)  
  if (inputValue === undefined || inputValue === null || inputValue === "") {
    alert('You must write something!');
  } else {
      document.getElementById('ulList').appendChild(li);
      closeButton();
    }
})
  
// * Close button design
function closeButton() {
  for (i = 0; i < myTaskList.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00d7");

    span.className = "closeTask";
    span.appendChild(txt);
    myTaskList[i].appendChild(span);
  } 
  // * Close button funcionality
  let closeTask = document.getElementsByClassName('closeTask');
  for (i = 0; i < closeTask.length; i++) {
		closeTask[i].onclick = function () {
      let task = this.parentElement;
      task.remove();
		}
	}
}