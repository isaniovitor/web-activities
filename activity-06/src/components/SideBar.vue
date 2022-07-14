<script setup lang="ts">
import type { ItemProps } from "./NavItem.vue";
import Item from "./NavItem.vue";
import { onMounted } from "vue";
import router from "@/router";

const menuItems: ItemProps[] = [
  { name: "Home", route: "/home" },
  { name: "Explore", route: "#" },
  { name: "Notifications", route: "#" },
  { name: "Messages", route: "#" },
  { name: "Profile", route: "/profile" },
  { name: "More", route: "#" },
];

onMounted(() => {
  const menuTzeetbutton: any = document.getElementById("tzeet");
  const modal: any = document.getElementById("modal");

  menuTzeetbutton.onclick = function () {
    modal.style.display = "block";
  };
});
</script>

<template>
  <nav class="col-2 col-lg-2 order-0">
    <li class="navChild row d-flex justify-content-center align-self-center">
      <img src="../assets/tiziu.png" />
    </li>
    <div v-for="(item, i) in menuItems" :key="i">
      <Item :item="item" />
    </div>
    <li class="navChild row d-flex justify-content-center align-self-center">
      <button id="tzeet" type="button" class="btn btn-primary">
        <p class="d-none d-sm-none d-md-none d-lg-block d-xl-block col">
          Tweet
        </p>
        <i
          class="bi bi-chat d-block d-sm-block d-md-block d-lg-none d-xl-none p-1 col"
        ></i>
      </button>
    </li>
  </nav>
</template>

<style>
nav {
  list-style-type: none;

  margin: 0;
  padding: 0;
}

.navChild {
  padding: 10px 0;
}

.navChild button {
  border-radius: 40px;
}

.navChild button p {
  padding: 10px 50px;
  margin: 0 !important;
  border-radius: 40px;
}

.navChild:hover:not(:first-child, :last-child) {
  background-color: rgba(15, 25, 20, 0.1);
  color: rgb(15, 20, 25);
}

.navChild a {
  color: rgb(15, 20, 25);
}

.navChild a:hover {
  color: rgb(15, 20, 25);
}
</style>
