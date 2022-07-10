<template>
  <v-card class="card-1 card-div">
    <div class="like-icon-div">
      <label for="card-1-like" class="like-icon-div-child"> </label>
    </div>
    <router-link
      :to="{
        path: '/productDetails/' + product.id,
        params: { id: product.id },
      }"
    >
      <img
        :src="
          'http://localhost:1337' + product.attributes.image.data.attributes.url
        "
        style="width: 100%; height: 100px; cursor: pointer"
        class="img"
        alt=""
      />
    </router-link>
    <v-spacer></v-spacer>
    <v-row style="width: 100%">
      <v-card-title style="width: 100%" class="d-flex justify-space-between">
        {{ product.attributes.title }}
        <v-col class="d-flex justify-end">
          <v-icon large @click="deleteProduct" :class="canEdit ? '' : 'd-none'"
            >mdi-delete</v-icon
          >
          <router-link
            :to="{
              path: '/editDonation/' + product.id,
              params: { id: product.id },
            }"
          >
            <v-icon large :class="canEdit ? '' : 'd-none'">mdi-pencil</v-icon>
          </router-link>
          <v-icon
            large
            :color="liked ? 'red' : 'grey'"
            @click="manageUserLiked"
            :class="!canEdit ? '' : 'd-none'"
            >mdi-cart-outline</v-icon
          >
        </v-col>
      </v-card-title>
    </v-row>
  </v-card>
</template>

<script>
import { computed } from "@vue/composition-api";
import { donationStore } from "@/stores/donation";
import { useRoute } from "vue2-helpers/vue-router";
import { userStore } from "@/stores/user";
import Vue from "vue";

export default Vue.extend({
  name: "Product",

  data: () => ({
    loading: false,
    store: donationStore(),
  }),

  props: {
    product: Object,
    filted: Boolean,
  },

  setup(props) {
    let liked = false;
    let canEdit = false;
    const route = useRoute();
    const store = donationStore();
    const userLikedDonations = computed(() => store.currentUserLiked);
    const userDonations = computed(() => store.currentUserDonations);

    if (userLikedDonations.value.includes(props.product)) liked = true;
    if (
      userDonations.value.includes(props.product) &&
      route?.fullPath == "/userDonations"
    )
      canEdit = true;
    return {
      liked,
      canEdit,
    };
  },

  methods: {
    async deleteProduct() {
      const result = await this.store.delete(this.product.id);

      if (result) {
        this.store.getDonations();
        this.$toast.success("Doação deletada com sucesso!");
      } else {
        this.$toast.error("Não foi possível deletar doação!");
      }
    },
    async manageUserLiked() {
      const store = userStore();
      const newDonation = this.product;

      if (this.liked) {
        newDonation.attributes.users_liked.data.splice(
          newDonation.attributes.users_liked.data.indexOf(store.user.id)
        );
      } else {
        newDonation.attributes.users_liked.data.push(store.user.id);
      }

      const result = await this.store.update(this.product);
      if (result) {
        this.store.getDonations();
        this.$toast.success(" com sucesso!");
      } else {
        this.$toast.error("Não foi possíveo!");
      }
    },
  },
});
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

/* Card Styling */
.card-div {
  width: 20em;
  min-height: 20em;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: var(--card-main-color);
  margin: 0.6em;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: transform 0.2s ease-in-out;
}

/* ======== General styling of all cards and heart divs ========== */
.img-div {
  width: 100%;
  height: 8em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  z-index: 1;
  border-radius: 0 0 10px 10px;
}
.img {
  transform-origin: bottom;
  transform: translateY(7.5%);
  transition: transform 0.3s ease-in-out;
}

/* === Styling the like Icon ==== */
.like-icon-div {
  padding: 1em 1em 0 1em;
  width: 100%;
  box-sizing: border-box;
  text-align: right;
  font-size: 1.5em;
  color: var(--heart-icon-color);
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: flex-end;
}

.like-icon-div-child {
  /* background-color: yellow; */
  width: 1em;
  height: 1em;
  position: relative;
  z-index: 3;
  cursor: pointer;
}

/* God of war image and heart-background*/
.gow-img-div {
  background-color: var(--card-1-secondary-color);
}

.gow-img-div img {
  width: 65%;
  transform: translateY(7.5%);
  /* background-color: whitesmoke; */
}

.card-1 .like-icon-div {
  background-color: var(--card-1-secondary-color);
}

/* Sekiro image and heart-background */

.card-2 .like-icon-div {
  background-color: var(--card-2-secondary-color);
}

/* Dazai image and heart-background */

.card-3 .like-icon-div {
  background-color: var(--card-3-secondary-color);
}

/* U4 image and heart-background*/

/* ======== text Container Styling general ======== */

/* === Pricing and cart div  ===== */

/* ====== Hover effects ======= */
.card-div:hover .img-div img {
  transform: translateY(7.5%) scale(1.2);
}

.card-div:hover {
  transform: translate(0, -10px);
}

.like-icon-div-child:hover .heart-fill {
  opacity: 1;
  transform: scale(1);
}

.like-icon-div-child:hover .heart-empty {
  transition-delay: 0.25s;
  opacity: 0;
}

@keyframes like-animation {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    color: var(--liked-heart-icon-color);
    transform: scale(0.5);
  }

  100% {
    opacity: 1;
    color: var(--liked-heart-icon-color);
    transform: scale(1);
  }
}

@keyframes unlike-animation {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(0.5);
  }

  100% {
    opacity: 1;
    color: var(--heart-icon-color);
    transform: scale(1);
  }
}
</style>
