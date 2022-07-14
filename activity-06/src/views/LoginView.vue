<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email: any = document.getElementById("email");
  const emailError: any = document.getElementById("emailError");
  const password: any = document.getElementById("password");
  const button: any = document.getElementById("loginButton");

  function validation() {
    if (password.value === "") {
      button.disabled = true;
      return false;
    }

    if (email.value !== "" && emailRegEx.test(email.value.toLowerCase())) {
      email.classList.remove("is-invalid");
      button.disabled = false;

      return false;
    } else {
      email.classList.add("is-invalid");
      emailError.innerHTML = "Email inválido!";

      button.disabled = true;
      return false;
    }
  }

  password.onkeyup = function () {
    validation();
  };

  email.onkeyup = function () {
    validation();
  };
});
</script>

<template>
  <main class="main">
    <div class="mainContainer">
      <div class="d-flex justify-content-center">
        <img src="../assets/tiziu.png" alt="logo" />
      </div>
      <h5>Entre no Tzeet agora mesmo</h5>

      <form>
        <div>
          <div class="form-floating mb-3">
            <input
              class="form-control"
              id="email"
              placeholder="name@example.com"
            />
            <label for="email">Email</label>

            <div id="emailError" class="invalid-feedback"></div>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
            <label for="password">Password</label>
          </div>
        </div>

        <a href="#" class="minStyle">Esqueceu a senha?</a><br />

        <div class="buttonContainer">
          <button
            type="submit"
            id="loginButton"
            class="btn btn-primary rounded-pill"
            disabled
            :onclick="$router.push({ name: 'home' })"
          >
            Entrar
          </button>
        </div>

        <router-link to="/userRegister">
          <p class="minStyle">Não tem uma conta? <a>Inscreva-se</a></p>
        </router-link>
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
