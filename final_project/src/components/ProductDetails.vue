<template>
  <v-container mt-3 mb-3>
    <v-col class="d-flex align-end mb-6 flex-column">
      <router-link to="/productsList"><v-icon>mdi-close</v-icon></router-link>

      <v-col class="d-flex align-center justify-center">
        <img
          :src="
            'http://localhost:1337' +
            donation.attributes.image.data.attributes.url
          "
          class="img"
          alt=""
          style="width: 70%; height: 500px"
        />
      </v-col>
      <v-col>
        <div class="pl-6">
          <v-row class="d-flex justify-space-between">
            <p class="display-1 mb-0">{{ donation.attributes.title }}</p>
          </v-row>
          <div class="row">
            <div>
              <p class="pt-3 subtitle-1 font-weight-thin">
                {{ donation.attributes.description }}
              </p>
            </div>
          </div>
        </div>
      </v-col>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Donation, donationStore } from "@/stores/donation";
import { onBeforeMount, ref } from "@vue/composition-api";

export default {
  name: "ProductDetails",

  props: {
    id: String,
  },

  setup(props: { id: number }) {
    const store = donationStore();
    const donation = ref<Donation>({} as Donation);

    onBeforeMount(async () => {
      donation.value = await store.getDonation(props.id);
    });

    return {
      store,
      donation,
    };
  },
};
</script>
