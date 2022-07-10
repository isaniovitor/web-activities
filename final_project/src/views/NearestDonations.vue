<template>
  <v-card>
    <Map :donations="store.donations" />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { computed, onBeforeMount } from "@vue/composition-api";
import { donationStore } from "../stores/donation";
import Map from "@/components/Map.vue";

export default Vue.extend({
  name: "NearestDonations",

  data: () => ({
    drawer: true,

    // checkbox: false,
  }),

  components: {
    Map,
    // Map,
  },

  setup() {
    const store = donationStore();
    const donations = computed(() => store.currentDonations);
    // console.log(donations.value);

    onBeforeMount(async () => store.getDonations());
    return {
      store,
      donations,
    };
  },
});
</script>

<style>
a {
  text-decoration: none;
}
</style>
