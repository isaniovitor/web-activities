<script setup lang="ts">
import type { UserProps } from "./FollowerSuggestion.vue";
import FollowerSuggestion from "./FollowerSuggestion.vue";

const followers: UserProps[] = [
  { name: "Isanios", nickName: "@isaniovitor" },
  { name: "Ewaldo", nickName: "@ewaldo" },
  { name: "Brunos", nickName: "@bruno" },
];
</script>

<template>
  <aside class="col-3 order-2 d-none d-sm-none d-md-none d-lg-block d-xl-block">
    <div class="d-flex row align-self-center justify-content-center">
      <div class="inputSearch d-flex">
        <i
          class="bi bi-chat d-flex col-2 justify-content-center align-self-center"
        ></i>
        <input type="text" placeholder="username" />
      </div>

      <div class="suggestionSection">
        <h5 class="d-flex col">Talvez você curta</h5>

        <div v-for="(follower, i) in followers" :key="i">
          <FollowerSuggestion :follower="follower" />
        </div>

        <a href="#">Mostrar mais</a>
      </div>
    </div>
  </aside>
</template>
