<template>
  <v-card class="d-flex flex-row">
    <SideBar />
    <router-view />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import SideBar from "@/components/SideBar.vue";

export default Vue.extend({
  name: "HomePage",

  data: () => ({
    drawer: true,
  }),

  components: {
    SideBar,
  },
});
</script>

<style>
a {
  text-decoration: none;
}
</style>
