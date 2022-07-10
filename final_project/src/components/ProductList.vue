<template>
  <v-col cols="10" rounded="0">
    <v-row>
      <v-col sm="4" md="3" v-for="(donation, i) in donations" :key="i">
        <Product :product="donation" :canEdit="canEdit" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { computed, onBeforeMount } from "@vue/composition-api";
import Vue from "vue";
import useRouter from "vue-router";
import { donationStore } from "../stores/donation";
import Product from "./Product.vue";
import { useRoute } from "vue2-helpers/vue-router";

export default Vue.extend({
  name: "ProductList",

  components: {
    Product,
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },

  setup() {
    const route = useRoute();
    const store = donationStore();
    let donations;
    let canEdit = false;

    const userLiked = computed(() => store.currentUserLiked);

    switch (route?.fullPath) {
      case "/userLiked":
        donations = computed(() => store.currentUserLiked);
        break;
      case "/userDonations":
        canEdit = true;
        donations = computed(() => store.currentUserDonations);
        break;
      default:
        donations = computed(() => store.currentDonations);
        break;
    }

    onBeforeMount(async () => store.getDonations());
    return {
      store,
      canEdit,
      donations,
    };
  },
});
</script>

<style>
.container {
  padding: 0px !important;
}
.v-btn.withoutupercase {
  text-decoration: none;
}
.v-chip.v-size--default {
  border-radius: 50px !important;
  font-size: 14px !important;
  height: 40px !important;
  width: 40px !important;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.card1 {
  z-index: 10;
}
.card2 {
  z-index: 1;
}
</style>
