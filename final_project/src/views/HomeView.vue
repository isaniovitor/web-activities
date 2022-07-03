<template>
  <v-card>
    <v-card class="d-flex flex-row">
      <SideBar :drawer="drawer" />

      <DashBoard />
    </v-card>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/global/Header.vue";
import SideBar from "@/components/SideBar.vue";
import DashBoard from "@/components/DashBoard.vue";
import Footer from "@/components/global/Footer.vue";

export default Vue.extend({
  name: "HomePage",

  data: () => ({
    drawer: true,

    // checkbox: false,
  }),

  components: {
    SideBar,
    DashBoard,
  },
});
</script>

<style>
a {
  text-decoration: none;
}
</style>
