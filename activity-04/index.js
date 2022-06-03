const inputs = document.getElementsByClassName('inputText');
const counter = document.getElementsByClassName('counter');
const button = document.getElementsByClassName('sendT');
const menuTzeetbutton = document.getElementById('tzeet');
const closeModal = document.getElementById('closeModel');
const modal = document.getElementById('modal');

let listInputs = [];

for (let i = 0; i < inputs.length; i++) {
  listInputs.push({
    input: inputs[i],
    button: button[i],
    counter: counter[i]
  });

  listInputs[i].input.onkeyup = function(){
    console.log("0"); 
    itsValid(this.value, listInputs[i]);
   
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
  }
}

function itsValid(value, input){
  var maxLength = 140;
  input.counter.textContent = `${value.length}`;

  if(value.length > 0) {
    input.counter.style.display = "block";
    input.button.disabled = false;
  }else{
    input.counter.style.display = "none";
    input.button.disabled = true;
  }

  if(value.length >= maxLength - 40 && value.length <= maxLength)  {
    input.counter.style.color = "rgb(255, 200, 0)";
  }else if(value.length >= maxLength) {
    input.counter.style.color = "rgb(255, 0, 0)";
    input.button.disabled = true;
  }else{
    input.counter.style.color = "black";
  }

  return true;
}

// // console.log(inputs); 
// for (let i = 0; i < inputs.length; i++) {
//   inputs[i].onkeyup = function(){
//     console.log("0"); 
//     itsValid(this.value);
   
//     this.style.height = "auto";
//     this.style.height = (this.scrollHeight) + "px";
//   }
// }

menuTzeetbutton.onclick = function(){
  modal.style.display = "block";
}

closeModal.onclick = function(){
  modal.style.display = "none";
}