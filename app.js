// * Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName('li')
let i;

for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement('span');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// * Click on a close button to hide the current list item
let close = document.getElementsByClassName('close');

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = 'none';
  }
};

// * Add a "checked" symbol when clicking on a list item
let test = document.getElementById('ulList')

test.addEventListener('click', function (ev) {
  ev.target.classList.toggle('checked');
}, false)

// * Create a new list item when clicking on the "Add" button
let button = document.getElementsByClassName('btn_add')

button[0].addEventListener('click', function () {
  let li = document.createElement('li');
  let inputValue = document.getElementById('inputBox').value;
  let t = document.createTextNode(inputValue);

  li.appendChild(t);
  if (inputValue === undefined || inputValue === null || inputValue === "") {
    alert('You must write something!')
  } else {
      document.getElementById('ulList').appendChild(li);
      console.log();
      

      // * Close button
      let span = document.createElement("span");
      let txt = document.createTextNode("\u00D7");

      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
      
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
        }
      }
    }
})