<template>
  <div>
    <v-app-bar color="blue" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <router-link to="/">
        <v-toolbar-title v-if="store.username"
          >Olá, {{ store.username }}!</v-toolbar-title
        >
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/registerDonation">
        <v-btn icon class="mx-1">
          <v-icon>mdi-hand-coin-outline</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/userDonations">
        <v-btn icon class="mx-1">
          <v-badge color="#94D0EF" :content="userDonations.length">
            <v-icon>mdi-heart-outline</v-icon>
          </v-badge>
        </v-btn>
      </router-link>
      <router-link to="/userLiked">
        <v-btn icon class="mx-1">
          <v-badge color="#94D0EF" :content="userLiked.length">
            <v-icon>mdi-cart-outline</v-icon>
          </v-badge>
        </v-btn>
      </router-link>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue--text text--accent-4"
        >
          <router-link to="/productsList">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/nearestDonations">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-map</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Doações próximas</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/login">
            <v-list-item @click="store.logout">
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sair</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { userStore } from "@/stores/user";
import { computed, onBeforeMount } from "@vue/composition-api";
import Vue from "vue";
import useRouter from "vue-router";
import { donationStore } from "@/stores/donation";

export default {
  name: "Header",

  data: () => ({
    drawer: false,
    group: null,
    store: userStore(),
  }),

  setup() {
    const store = donationStore();
    const userLiked = computed(() => store.currentUserLiked);
    const userDonations = computed(() => store.currentUserDonations);

    onBeforeMount(async () => store.getDonations());
    return {
      userLiked,
      userDonations,
    };
  },

  // methods: {
  //   logout() {
  //     this.store.logout();
  //   },
  // },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
