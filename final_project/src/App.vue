<template>
  <v-app>
    <v-main>
      <Header v-if="notIsLoginPage" />
      <router-view style="height: 100%" />
      <Footer v-if="notIsLoginPage" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/global/Header.vue";
import Footer from "./components/global/Footer.vue";

export default Vue.extend({
  name: "App",

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),

  computed: {
    notIsLoginPage() {
      return (
        this.$route.name !== "login" &&
        this.$route.name !== "register" &&
        this.$route.name !== "notFound"
      );
    },
  },
});
</script>
