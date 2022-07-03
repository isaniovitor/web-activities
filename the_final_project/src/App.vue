<template>
  <div id="app">
    <NavBar />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "./components/global/NavBar.vue";
// import Footer from "./components/global/Footer.vue";

export default Vue.extend({
  name: "App",

  components: {
    NavBar,
    // Footer,
  },

  data: () => ({
    //
  }),
});
</script>

<style lang="scss"></style>
