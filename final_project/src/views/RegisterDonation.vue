<template>
  <v-container mt-3 mb-3>
    <v-col class="d-flex align-end mb-6 flex-column">
      <router-link to="/productsList"><v-icon>mdi-close</v-icon></router-link>
      <v-row style="width: 100%" class="d-flex justify-center align-center">
        <v-col cols="4">
          <img :src="src" alt="" style="width: 400px; height: 600px" />
        </v-col>
        <v-col>
          <v-card-text>
            {{ product }}
            <h1 class="text-center mb-5">Faça o bem para o próximo!</h1>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  label="Nome"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                  outlined
                  dense
                />
                <v-textarea
                  v-model="description"
                  :error-messages="descriptionErrors"
                  label="Descrição"
                  required
                  @input="$v.description.$touch()"
                  @blur="$v.description.$touch()"
                  outlined
                  dense
                />
                <v-file-input
                  accept="image/*"
                  label="Imagem"
                  @change="handleFileUpload"
                  outlined
                  dense
                />
                <v-checkbox
                  v-model="checkbox"
                  :label="`Checkbox 1: ${checkbox.toString()}`"
                ></v-checkbox>
                <v-btn color="blue" @click="submit" dark block tile
                  >Cadastrar doação</v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { donationStore } from "@/stores/donation";
import { userStore } from "@/stores/user";

export default {
  name: "RegisterDonation",
  mixins: [validationMixin],

  data: () => ({
    name: "",
    description: "",
    picture: "",
    latitude: "",
    longitude: "",
    checkbox: true,
    userStore: userStore(),
    store: donationStore(),
    src: "",
  }),

  created() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      },
      (error) => {
        console.log(error.message);
      }
    );
  },

  props: {
    product: [],
  },

  validations: {
    name: { required },
    description: { required },
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Nome is required");
      return errors;
    },

    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.required && errors.push("Descrição is required.");
      return errors;
    },
  },

  methods: {
    handleFileUpload(event) {
      this.picture = event;
      this.src = URL.createObjectURL(event);
    },

    async submit() {
      this.$v.$touch();

      if (!this.$v.$error) {
        const formData = new FormData();

        formData.append("files.image", this.picture, this.picture.name);
        formData.append(
          "data",
          JSON.stringify({
            title: this.name,
            description: this.description,
            status: true,
            latitude: this.latitude.toString(),
            longitude: this.longitude.toString(),
            users_permissions_user: this.userStore.user.id,
          })
        );

        const result = await this.store.create(formData);
        if (result) {
          this.$router.push({ name: "productsList" });
          this.$toast.success("Doação realizada com sucesso!");
        } else {
          this.$toast.error("Não foi possível cadastrar doação!");
        }
      }
    },

    clear() {
      this.$v.$reset();
      this.name = "";
      this.description = "";
    },
  },
};
</script>
