<template>
  <div>
    <v-app-bar color="blue" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Doa Aí</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-divider vertical class=""></v-divider> -->
      <v-btn icon class="mx-1">
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
      <!-- <v-divider vertical class=""></v-divider> -->
      <v-btn icon class="mx-1">
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
      <!-- <v-divider vertical class=""></v-divider> -->
      <v-btn icon class="mx-1">
        <v-badge color="#94D0EF" content="2">
          <v-icon>mdi-cart-outline</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue--text text--accent-4"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/login">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Perfil</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
export default {
  name: "Header",

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
