<script setup lang="ts">
export interface ItemProps {
  name: string;
  route: string;
}
defineProps<{
  item: ItemProps;
}>();
</script>

<template>
  <li class="navChild row d-flex justify-content-center align-self-center">
    <i
      class="bi bi-house-door p-1 d-flex col-5 justify-content-center justify-content-md-center justify-content-lg-end align-self-center"
    ></i>
    <router-link :to="item.route">
      <a class="d-none d-sm-none d-md-none d-lg-block d-xl-block p-1 col">{{
        item.name
      }}</a>
    </router-link>
  </li>
</template>
