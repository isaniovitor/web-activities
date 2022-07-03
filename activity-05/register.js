const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const INITIAL_YEAR = 2000;
const FIST_DAY = 1;
// const LAST_DAY = 31;
const FIST_MONTH = 1;
const LAST_MONTH = 12;


const requiredInputs = document.getElementsByClassName('required');

// const name = document.getElementById('name');
// const nameError = document.getElementById('nameError');

const email = document.getElementById('email');
const emailError = document.getElementById('emailError');

const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

const repeatPassword = document.getElementById('repeatPassword');
const repeatPasswordError = document.getElementById('repeatPasswordError');

const month = document.getElementById('month');
const day = document.getElementById('day');
const year = document.getElementById('year');

const radio = document.getElementById('policiesYes');
const radioNo = document.getElementById('policiesNo');

const button = document.getElementById('loginButton');

window.onload = function() {
  button.disabled = !radio.checked;

  for (let i = FIST_MONTH; i <= LAST_MONTH; i++) {
    const option = document.createElement("option");

    option.innerHTML =  i;
    month.appendChild(option);
  }

  chooseListDays();

  for (let i = INITIAL_YEAR; i <= new Date().getFullYear(); i++) {
    const option = document.createElement("option");

    option.innerHTML =  i;
    year.appendChild(option);
  }
};

function chooseListDays(){
  let numberOfDays = 0;

  switch (month.value) {
    case "1":
      numberOfDays = 31;
      break;
    case "2":
      ((year.value % 4 == 0) && ((year.value % 100 != 0) || (year.value % 400 == 0))) ? numberOfDays = 29 : numberOfDays = 28;
      break;
    case "3":
      numberOfDays = 31;
      break;
    case "4":
      numberOfDays = 30;
      break;
    case "5":
      numberOfDays = 31;
      break;
    case "6":
      numberOfDays = 30;
      break;
    case "7":
      numberOfDays = 31;
      break;
    case "8":
      numberOfDays = 31;
      break;
    case "9":
      numberOfDays = 30;
      break;
    case "10":
      numberOfDays = 31;
      break;
    case "11":
      numberOfDays = 30;
        break;
    case "12":
      numberOfDays = 31;
      break;
  }

  // console.log(day.childNodes);
  while (day.firstChild) {
    day.removeChild(day.firstChild);
  }

  for (let i = 1; i <= numberOfDays; i++) {
    const option = document.createElement("option");

    option.innerHTML =  i;
    day.appendChild(option);
  }
}

radio.onclick = function () {
  button.disabled = !radio.checked;
}

radioNo.onclick = function () {
  button.disabled = true;
}

// register
function registerUserFormValidation(){
  let isValidate = true;

  for (let i = 0; i < requiredInputs.length; i++) {
    if (requiredInputs[i].value === "" || requiredInputs[i].cheked){
      const error = document.getElementById(`${requiredInputs[i].id}Error`);

      requiredInputs[i].classList.add("is-invalid");
      error.innerHTML = `${requiredInputs[i].id} inválido`;
       isValidate = false; 
    } else {
      requiredInputs[i].classList.remove("is-invalid");
    }
  }

  // email validation
  if(!emailRegEx.test((email.value.toLowerCase()))) {
    email.classList.add("is-invalid");
    emailError.innerHTML = `Email inválido`;
    isValidate = false; 
  } else {email.classList.remove("is-invalid")}

  // password validation
  if(password.value.length < 6) {
    password.classList.add("is-invalid");
    passwordError.innerHTML = `Senha inválido`;
    isValidate = false; 
  } else {password.classList.remove("is-invalid")}

  // repeatPassword validation
  console.log(password.value !== repeatPassword.value);
  if(password.value !== repeatPassword.value) {
    repeatPasswordError.classList.add("is-invalid");
    repeatPasswordError.innerHTML = "Não é igual a senha";
    isValidate = false; 
  } else {repeatPasswordError.classList.remove("is-invalid")}

  // accept the terms
  return  isValidate;
}