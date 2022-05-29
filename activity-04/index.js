const counter = document.getElementById('counter');
const button = document.getElementById('sendT');
const menuTzeetbutton = document.getElementById('tzeet');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModel');


console.log(menuTzeetbutton);
// const myInput = document.getElementById('myInput');

// myModal.addEventListener('shown.bs.modal', () => {
//   menuTzeetbutton.focus();
// })

function itsValid(value){
  var maxLength = 140;
  counter.textContent = `${value.length}`;

  if(value.length > 0) {
    counter.style.display = "block";
    button.disabled = false;
  }else{
    counter.style.display = "none";
    button.disabled = true;
  }

  if(value.length >= maxLength - 40 && value.length <= maxLength)  {
    counter.style.color = "rgb(255, 200, 0)";
  }else if(value.length >= maxLength) {
    counter.style.color = "rgb(255, 0, 0)";
    button.disabled = true;
  }else{
    counter.style.color = "black";
  }

  return true;
}

document.getElementById('inputText').onkeyup = function(){
    itsValid(this.value);
    
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
}

menuTzeetbutton.onclick = function(){
  console.log("po");
  modal.style.display = "block";
}

closeModal.onclick = function(){
  modal.style.display = "none";
}