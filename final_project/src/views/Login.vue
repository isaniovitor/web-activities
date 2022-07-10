<template>
  <v-container>
    <v-row class="main">
      <v-col cols="12" md="6" class="main d-flex justify-center align-center">
        <v-card-text class="mt-12">
          <h1 class="text-center mb-16">Login in to Your Account</h1>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8">
              <v-text-field
                v-model="identifier"
                :error-messages="identifierErrors"
                label="E-mail"
                required
                @input="$v.identifier.$touch()"
                @blur="$v.identifier.$touch()"
                outlined
                dense
              />
              <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                :counter="10"
                label="Password"
                required
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                outlined
                dense
                type="password"
              />
              <v-row>
                <v-col cols="12" sm="7">
                  <v-checkbox label="Remember Me" class="mt-n1" color="blue">
                  </v-checkbox>
                </v-col>
                <v-col cols="12" sm="5">
                  <span class="caption blue--text">Forgot password</span>
                </v-col>
              </v-row>
              <v-btn color="blue" @click="submit" dark block tile>Log in</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="main d-flex flex-column justify-center align-end blue rounded-bl-xl"
      >
        <v-img src="../assets/login.png" width="100%" height="100px" />
        <div
          width="100%"
          class="white--text d-flex justify-start align-center pa-3"
        >
          <v-card-text class="white--text" width="fit-content">
            <h3 class="text-center">Don't Have an Account Yet?</h3>
          </v-card-text>
          <div class="main d-flex flex-column justify-center align-end">
            <router-link to="/register">
              <v-btn tile outlined dark>SIGN UP</v-btn>
            </router-link>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import { userStore } from "../stores/user";

export default Vue.extend({
  name: "Login",
  mixins: [validationMixin],

  data: () => ({
    identifier: "",
    password: "",
    store: userStore(),
    // checkbox: false,
  }),

  validations: {
    identifier: { required, email },
    password: { required, minLength: minLength(6) },
  },

  computed: {
    identifierErrors() {
      const errors: any[] = [];
      if (!this.$v.identifier.$dirty) return errors;
      !this.$v.identifier.email && errors.push("Must be valid e-mail");
      !this.$v.identifier.required && errors.push("E-mail is required");
      return errors;
    },

    passwordErrors() {
      const errors: any[] = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("senha must be at most 8 characters long");
      !this.$v.password.required && errors.push("senha is required.");
      return errors;
    },
  },

  methods: {
    async submit() {
      this.$v.$touch();

      if (!this.$v.$error) {
        const result = await this.store.authenticate(
          this.identifier,
          this.password
        );

        if (result) {
          this.$router.push({ name: "productsList" });
          this.$toast.success("Login realizado com sucesso!");
        } else {
          this.$toast.error("Email ou senha incorretos!");
        }
      }
    },

    clear() {
      this.$v.$reset();
      this.identifier = "";
      this.password = "";
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
