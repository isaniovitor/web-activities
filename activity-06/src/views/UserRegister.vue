<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const INITIAL_YEAR = 2000;
  const FIST_DAY = 1;
  // const LAST_DAY = 31;
  const FIST_MONTH = 1;
  const LAST_MONTH = 12;

  const requiredInputs: any = document.getElementsByClassName("required");

  const form: any = document.getElementById("form");

  const email: any = document.getElementById("email");
  const emailError: any = document.getElementById("emailError");

  const password: any = document.getElementById("password");
  const passwordError: any = document.getElementById("passwordError");

  const repeatPassword: any = document.getElementById("repeatPassword");
  const repeatPasswordError: any = document.getElementById(
    "repeatPasswordError"
  );

  const month: any = document.getElementById("month");
  const day: any = document.getElementById("day");
  const year: any = document.getElementById("year");

  const radio: any = document.getElementById("policiesYes");
  const radioNo: any = document.getElementById("policiesNo");

  const button: any = document.getElementById("loginButton");

  function chooseListDays() {
    let numberOfDays = 0;

    switch (month.value) {
      case "1":
        numberOfDays = 31;
        break;
      case "2":
        year.value % 4 == 0 && (year.value % 100 != 0 || year.value % 400 == 0)
          ? (numberOfDays = 29)
          : (numberOfDays = 28);
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
      const option: any = document.createElement("option");

      option.innerHTML = i;
      day.appendChild(option);
    }
  }

  window.onload = function () {
    button.disabled = !radio.checked;

    for (let i = FIST_MONTH; i <= LAST_MONTH; i++) {
      const option: any = document.createElement("option");

      option.innerHTML = i;
      month.appendChild(option);
    }

    chooseListDays();

    for (let i = INITIAL_YEAR; i <= new Date().getFullYear(); i++) {
      const option: any = document.createElement("option");

      option.innerHTML = i;
      year.appendChild(option);
    }
  };

  radio.onclick = function () {
    button.disabled = !radio.checked;
  };

  radioNo.onclick = function () {
    button.disabled = true;
  };

  month.onclick = function () {
    chooseListDays();
  };

  year.onclick = function () {
    chooseListDays();
  };

  function validation() {
    let isValidate = true;

    for (let i = 0; i < requiredInputs.length; i++) {
      if (requiredInputs[i].value === "" || requiredInputs[i].cheked) {
        const error: any = document.getElementById(
          `${requiredInputs[i].id}Error`
        );

        requiredInputs[i].classList.add("is-invalid");
        error.innerHTML = `${requiredInputs[i].id} inválido`;
        isValidate = false;
      } else {
        requiredInputs[i].classList.remove("is-invalid");
      }
    }

    // email validation
    if (!emailRegEx.test(email.value.toLowerCase())) {
      email.classList.add("is-invalid");
      emailError.innerHTML = `Email inválido`;
      isValidate = false;
    } else {
      email.classList.remove("is-invalid");
    }

    // password validation
    if (password.value.length < 6) {
      password.classList.add("is-invalid");
      passwordError.innerHTML = `Senha inválido`;
      isValidate = false;
    } else {
      password.classList.remove("is-invalid");
    }

    // repeatPassword validation
    console.log(password.value !== repeatPassword.value);
    if (password.value !== repeatPassword.value) {
      repeatPasswordError.classList.add("is-invalid");
      repeatPasswordError.innerHTML = "Não é igual a senha";
      isValidate = false;
    } else {
      repeatPasswordError.classList.remove("is-invalid");
    }

    // accept the terms
    return isValidate;
  }

  form.onsubmit = function () {
    return validation();
  };
});
</script>

<template>
  <main class="main">
    <div class="mainContainer">
      <div class="d-flex justify-content-between">
        <h5>Criar conta</h5>

        <a href="index.html"><i class="bi bi-x-lg"></i></a>
      </div>

      <form id="form">
        <div class="form-floating mb-3">
          <input class="form-control required" id="name" />
          <label for="name">Name</label>

          <div id="nameError" class="invalid-feedback"></div>
        </div>

        <div class="form-floating mb-3">
          <input
            class="form-control required"
            id="email"
            placeholder="name@example.com"
          />
          <label for="email">Email</label>

          <div id="emailError" class="invalid-feedback"></div>
        </div>

        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control required"
            id="password"
            placeholder="Password"
          />
          <label for="password">Password</label>

          <div id="passwordError" class="invalid-feedback"></div>
        </div>

        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control required"
            id="repeatPassword"
            placeholder="Password"
          />
          <label for="repeatPassword">Repeat password</label>

          <div id="repeatPasswordError" class="invalid-feedback"></div>
        </div>

        <h6>Data de nascimento</h6>
        <p>
          Isso não será exibido publlicamente. Confirme sua própria idade, mesmo
          se esta conta for de empresa, de um animal de estimação ou outro.
        </p>

        <div class="d-flex justify-content-between">
          <!-- <div class="form-floating col-2 ">
                  <select class="form-select dias t" id="floatingSelect" aria-label="Floating label select example" required>
                  <option value="" selected></option>
                  </select>
                  <label for="floatingSelect">Dias</label>
              </div> -->

          <div class="col-md-3">
            <label for="month" class="form-label">Month</label>
            <select
              class="form-select required"
              id="month"
              onchange="chooseListDays()"
            >
              <option value="" selected disabled hidden></option>
            </select>
            <div
              id="monthError"
              class="invalid-feedback"
              style="white-space: nowrap"
            >
              Select a valid date
            </div>
          </div>

          <div class="col-md-3">
            <label for="day" class="form-label">Day</label>
            <select class="form-select required" id="day">
              <option value="" selected disabled hidden></option>
            </select>
            <div id="dayError" class="invalid-feedback">
              Please select a valid state.
            </div>
          </div>

          <div class="col-md-3">
            <label for="year" class="form-label">Year</label>
            <select
              class="form-select required"
              id="year"
              onchange="chooseListDays()"
            >
              <option value="" selected disabled hidden></option>
            </select>
            <div id="yearError" class="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
        </div>

        <div class="col-12 d-flex justify-content-between">
          <div>
            Recebe e-mails sobre sua atividade no Twitter e recomendações
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="recommendations"
              aria-describedby="recommendations"
            />
          </div>
        </div>

        <div>
          <div>
            Você condorda com os nossos termos, com a Política de Privacidade e
            com o Uso de Coockies?
          </div>

          <div class="col-12 d-flex gap-3">
            <div class="form-check">
              <input
                type="radio"
                id="policiesYes"
                class="form-check-input"
                name="radio-stacked"
              />
              <label class="form-check-label" for="policiesYes">Yes</label>
            </div>
            <div class="form-check">
              <input
                type="radio"
                id="policiesNo"
                class="form-check-input"
                name="radio-stacked"
              />
              <label class="form-check-label" for="policiesNo">No</label>
            </div>
          </div>
        </div>

        <div class="buttonContainer" style="margin: 10px 0 0 0">
          <button
            type="submit"
            id="loginButton"
            class="btn btn-primary rounded-pill"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<style>
/* Home */
.main {
  display: flex !important;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: #c4c4;
}

.minStyle {
  font-size: 12px;
  margin: 0 !important;
  padding: 0 !important;
}

.mainContainer {
  width: 500px;
  height: fit-content;

  padding: 30px;
  background-color: #fff;
}

.mainContainer button {
  width: 100%;
}

.buttonContainer {
  margin-top: 40px;
  margin-bottom: 10px;
}
</style>
