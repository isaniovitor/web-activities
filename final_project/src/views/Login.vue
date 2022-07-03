<template>
  <!-- <router-view> -->
  <v-container>
    <v-card class="main">
      <v-row class="main">
        <v-col cols="12" md="6" class="main d-flex justify-center align-center">
          <v-card-text class="mt-12">
            <h1 class="text-center mb-16">Login in to Your Account</h1>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8">
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
                  :counter="10"
                  label="Password"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
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
                <v-btn color="blue" @click="submit" dark block tile
                  >Log in</v-btn
                >
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
    </v-card>
  </v-container>
  <!-- </router-view> -->
</template>

<script lang="ts">
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import Header from "@/components/global/Header.vue";

export default Vue.extend({
  name: "Login",
  mixins: [validationMixin],

  data: () => ({
    email: "",
    password: "",
    // checkbox: false,
  }),

  props: {
    source: String,
  },

  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8) },
  },

  computed: {
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
        errors.push("senha must be at most 8 characters long");
      !this.$v.password.required && errors.push("senha is required.");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();

      if (!this.$v.$error) {
        this.$router.push({ name: "home" });
        this.$toast.success("Cadastro realizado com sucesso!", {
          position: "bottom-right",
          timeout: 3010,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: false,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
    },

    clear() {
      this.$v.$reset();
      this.email = "";
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
