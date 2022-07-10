<template>
  <v-container mt-3 mb-3>
    <v-col class="d-flex align-end mb-6 flex-column">
      <router-link to="/productsList"><v-icon>mdi-close</v-icon></router-link>
      <v-row style="width: 100%" class="d-flex justify-center align-center">
        <v-col cols="4">
          <img
            :src="src || 'http://localhost:1337' + image"
            alt=""
            style="width: 400px; height: 600px"
          />
        </v-col>
        <v-col>
          <v-card-text>
            <h1 class="text-center mb-5">Faça o bem para o próximo!</h1>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  label="Nome"
                  required
                  @input="$v.name.$touch()"
                  outlined
                  dense
                />
                <v-textarea
                  v-model="description"
                  :error-messages="descriptionErrors"
                  label="Descrição"
                  required
                  @input="$v.description.$touch()"
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
                  >Editar doação</v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { donationStore } from "@/stores/donation";
import { onBeforeMount, ref } from "@vue/composition-api";

export default {
  name: "EditDonation",
  mixins: [validationMixin],

  data: () => ({
    picture: "",
    checkbox: true,
    store: donationStore(),
    src: "",
  }),

  props: {
    id: String,
  },

  setup(props) {
    const store = donationStore();
    const donation = ref({});
    const name = ref("");
    const description = ref("");
    const image = ref("");

    onBeforeMount(async () => {
      donation.value = await store.getDonation(props.id);
      name.value = donation.value.attributes.title;
      description.value = donation.value.attributes.description;
      image.value = donation.value.attributes.image.data.attributes.url;
    });

    return {
      name,
      description,
      image,
      donation,
    };
  },

  validations: {
    name: { required },
    description: { required },
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (this.name) return errors;
      !this.name.required && errors.push("Nome is required");
      return errors;
    },

    descriptionErrors() {
      const errors = [];
      if (this.description) return errors;
      !this.description.required && errors.push("Descrição is required.");
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
        const editedDonation = this.donation;
        editedDonation.attributes.title = this.name;
        editedDonation.attributes.description = this.description;

        const result = await this.store.update(editedDonation, this.picture);
        if (result) {
          this.$router.push({ name: "userDonations" });
          this.$toast.success("Doação editada com sucesso!");
        } else {
          this.$toast.error("Não foi possível editadar doação!");
        }
      }
    },
  },
};
</script>
