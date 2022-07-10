<template>
  <div>
    <!-- <div
      style="
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      "
    >
      <div>
        <h1>Your coordinates:</h1>
        <p>
          {{ donation.attributes.latitude }} Latitude,
          {{ donation.attributes.longitude }} Longitude 
        </p>
      </div>
      <div>
        <h1>Map coordinates:</h1>
        <p>
          {{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng }} Longitude
        </p>
      </div>
    </div> -->
    <GmapMap
      :center="myCoordinates"
      :zoom="zoom"
      style="width: 94vw; height: 100vh; margin: 32px auto"
      ref="mapRef"
      @dragend="handleDrag"
    >
      <!-- v-for="(m, index) in markers" -->
      <!-- @click="center = myCoordinates" -->

      <div v-for="(donation, i) in donations" :key="i">
        <!-- <router-link
          @mouseover="showByIndex = 2"
          @mouseout="showByIndex = null"
        > -->
        <GmapMarker
          :key="i"
          :position="{
            lat: parseFloat(donation.attributes.latitude),
            lng: parseFloat(donation.attributes.longitude),
          }"
          :clickable="true"
          :draggable="true"
          @click="details(donation.id)"
        >
          <gmap-info-window :opened="true">
            <img
              :src="
                'http://localhost:1337' +
                donation.attributes.image.data.attributes.url
              "
              class="img"
              alt=""
              style="width: 80px; height: 80px"
            />
            <div style="text-align: center">
              {{ donation.attributes.title }}
            </div>
          </gmap-info-window>
        </GmapMarker>
        <!-- </router-link> -->
      </div>
    </GmapMap>
  </div>
</template>

<script>
import { computed, onBeforeMount } from "@vue/composition-api";
import { donationStore } from "../stores/donation";

export default {
  data() {
    return {
      map: null,
      showByIndex: 0,
      myCoordinates: {
        lat: 0,
        lng: 0,
      },
      zoom: 10,
    };
  },

  setup() {
    const store = donationStore();
    const donations = computed(() => store.currentDonations);
    onBeforeMount(async () => store.getDonations());
    return {
      store,
      donations,
    };
  },

  created() {
    this.$getLocation({})
      .then((coordinates) => {
        this.myCoordinates = coordinates;
        console.log(coordinates);
      })
      .catch((error) => alert(error));
  },

  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },

  methods: {
    handleDrag() {
      let center = {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng(),
      };
      let zoom = this.map.getZoom();
      localStorage.center = JSON.stringify(center);
      localStorage.zoom = zoom;
    },

    details(id) {
      this.$router.push({
        path: "/productDetails/" + id,
        params: { id: id },
      });
    },
  },

  computed: {
    mapCoordinates() {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0,
        };
      }
      return {
        lat: this.map.getCenter().lat().toFixed(4),
        lng: this.map.getCenter().lng().toFixed(4),
      };
    },
  },
};
</script>

<style>
.gm-style-iw-d {
  overflow-y: hidden !important;
  overflow-x: scroll !important;
}
.gm-style-iw.gm-style-iw-c {
  padding: 0 !important;
}
.gm-ui-hover-effect {
  display: none !important;
}
</style>
