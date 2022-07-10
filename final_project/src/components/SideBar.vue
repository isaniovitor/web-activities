<template>
  <v-col cols="2" rounded="0">
    <v-btn @click="clearFilter" block color="red"> limpar </v-btn>
    <v-checkbox
      v-for="(check, i) in checkboxs"
      :key="i"
      id="1"
      v-model="check.status"
      @click="filter(check)"
      :label="check.name"
    ></v-checkbox>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";
import { donationStore } from "../stores/donation";

export default Vue.extend({
  name: "SideBar",

  data: () => ({
    checkboxs: [
      { status: false, id: 1, name: "Vestuário" },
      { status: false, id: 2, name: "Brinquedos" },
      { status: false, id: 3, name: "Aparelhos eletrônicos" },
      { status: false, id: 4, name: "Alimentos" },
      { status: false, id: 5, name: "Leitura" },
    ],
    store: donationStore(),
  }),

  methods: {
    filter(categorie: any) {
      this.checkboxs.map((currentCategorie) => {
        if (currentCategorie != categorie) {
          currentCategorie.status = false;
        }
      });

      this.store.getDonations(categorie.id);
    },
    clearFilter() {
      this.checkboxs.map((categorie) => {
        categorie.status = false;
      });

      this.store.getDonations();
    },
  },
});
</script>

<style>
*.v-application.primary--text {
  color: blueviolet !important;
}
</style>
