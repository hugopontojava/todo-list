let myTaskList = document.getElementsByTagName('li');
let ulEl = document.getElementById("ulList");
let strg = localStorage;
let i;

// * Get existing tanks on storage
for (i = 1; i <= strg.length; i++) {
  let li = document.createElement('li');
  let txt = document.createTextNode(strg.getItem(i));
  li.appendChild(txt);
  ulEl.appendChild(li);
  console.log(strg.getItem(i));
}

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
    ulEl.appendChild(li);
    strg.setItem(strg.length + 1, txt.textContent);
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
			// TODO: find a way to use strg.removeItem()
		}
	}
}