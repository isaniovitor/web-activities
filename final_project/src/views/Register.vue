<template>
  <!-- <router-view> -->
  <v-container>
    <v-card class="main elevation-6">
      <v-row class="main">
        <v-col
          cols="12"
          md="6"
          class="main d-flex flex-column justify-center align-end blue rounded-br-xl"
        >
          <v-img src="../assets/login.png" width="100%" height="100px" />
          <div
            style="width: 100%"
            class="white--text d-flex justify-start align-center pa-3"
          >
            <v-card-text class="white--text" style="width: fit-content">
              <h3 class="text-center">Alredy Signed up?</h3>
            </v-card-text>
            <div class="main d-flex flex-column justify-center align-start">
              <router-link to="/login">
                <v-btn tile outlined dark>Log in</v-btn>
              </router-link>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <v-card-text class="mt-12">
            <h1 class="text-center mb-16">Login in to Your Account</h1>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="username"
                  :error-messages="usernameErrors"
                  label="First Name"
                  required
                  @input="$v.username.$touch()"
                  @blur="$v.username.$touch()"
                  outlined
                  dense
                  class="mt-4"
                />
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                  outlined
                  dense
                />
                <v-text-field
                  v-model="password"
                  :error-messages="passwordErrors"
                  label="Password"
                  required
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                  outlined
                  dense
                  type="password"
                />
                <v-text-field
                  v-model="repeatPassword"
                  :error-messages="repeatPasswordErrors"
                  label="Reapeat assword"
                  required
                  @input="$v.repeatPassword.$touch()"
                  @blur="$v.repeatPassword.$touch()"
                  outlined
                  dense
                  type="password"
                />
                <v-btn color="blue" @click="submit" dark block tile
                  >Sign up</v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
  <!-- </router-view> -->
</template>

<script lang="ts">
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";
import { userStore } from "@/stores/user";

export default Vue.extend({
  name: "Register",
  mixins: [validationMixin],

  data: () => ({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    store: userStore(),
  }),

  validations: {
    username: { required },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    repeatPassword: { required, minLength: minLength(8) },
  },

  computed: {
    usernameErrors() {
      const errors: any[] = [];
      if (!this.$v.username.$dirty) return errors;
      // !this.$v.fistName && errors.push("Must be valid e-mail");
      !this.$v.username.required && errors.push("Nome requiriod");
      return errors;
    },

    emailErrors() {
      const errors: any[] = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },

    passwordErrors() {
      const errors: any[] = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("senha must be more then 8 characters long");
      !this.$v.password.required && errors.push("senha is required.");
      return errors;
    },

    repeatPasswordErrors() {
      const errors: any[] = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      !this.$v.repeatPassword.minLength &&
        errors.push("senha must be more then 8 characters long");
      this.repeatPassword !== this.password &&
        errors.push("não casa com a senha!");
      !this.$v.repeatPassword.required && errors.push("senha is required.");
      return errors;
    },
  },

  methods: {
    async submit() {
      this.$v.$touch();

      if (!this.$v.$error) {
        const result = await this.store.register(
          this.username,
          this.email,
          this.password
        );

        if (result) {
          this.$router.push({ name: "login" });
          this.$toast.success("Cadastro realizado com sucesso!");
        } else {
          this.$toast.error("Erro inesperados ao tentar cadastrar!!");
        }
      }
    },

    clear() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
      this.username = "";
    },
  },
});
</script>

<style scoped lang="scss">
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
.container {
  max-width: none !important;
  height: 100vh !important;

  .main {
    height: 100% !important;
  }
}
</style>
