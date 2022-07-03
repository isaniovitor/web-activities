const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const name = document.getElementById('name');
// const nameError = document.getElementById('nameError');

// const email = document.getElementById('email');
// const emailError = document.getElementById('emailError');

const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');


// const repeatPassword = document.getElementById('repeatPassword');


const button = document.getElementById('loginButton');

function loginFormValidation(){
  if (password.value === "") {
    button.disabled = true;
    return false;
  }

  if(email.value !== ""&& emailRegEx.test((email.value.toLowerCase()))) {
    email.classList.remove("is-invalid");
    button.disabled = false;
    return false;
  } else {
    email.classList.add("is-invalid");
    emailError.innerHTML = "Email inválido!"

    button.disabled = true;
    return false;
  }
}
