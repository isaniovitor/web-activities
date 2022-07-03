<template>
  <v-col cols="10" rounded="0">
    <v-row>
      <v-col sm="4" md="3" v-for="(clothe, i) in clothes" :key="i">
        <v-hover v-slot:default="{ hover }">
          <v-card height="300" align="center" flat outlined tile>
            <v-img :src="clothe.image" width="200" height="250" contain></v-img>
            <v-card-text class="mt-n4">
              <strong :class="hover ? 'red--text' : 'black--text'">{{
                clothe.title
              }}</strong>
            </v-card-text>

            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out v-card--reveal display-3 white--text blue"
                style="height: 100%"
              >
                <v-btn fab small color="white" class="ml-2">
                  <v-icon color="black">mdi-content-copy</v-icon>
                </v-btn>
                <v-btn fab small color="white" class="ml-2">
                  <v-icon color="black">mdi-heart-outline</v-icon>
                </v-btn>
              </div>
            </v-expand-transition>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DashBoard",

  data: () => ({
    page: 1,
    clothes: [
      {
        class: "pa-0",
        sold: "-20%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "KD 8 EXT",
        price: "$ 145.00",
      },
      {
        class: "pa-0",
        sold: "-30%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "Jordan Galaxy",
        price: "$ 599.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-17%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "Nike SB Trainerendor Leathe",
        price: "$ 190.00",
      },
      {
        class: "pa-0",
        sold: "-22%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "Air Jordan Spike 40 iD",
        price: "$ 220.00",
      },
      {
        class: "pa-0",
        sold: "-18%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "Nike Air Footscape Magista Flyknit",
        price: "$ 235.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-40%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "Nike Air Zoom Huarache 2k4",
        price: "$ 190.00",
      },
      {
        class: "pa-0",
        sold: "-13%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "Jordan Horizon",
        price: "$ 230.00",
      },
      {
        class: "pa-0",
        sold: "-15%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "Air Jordan xx9 Low",
        price: "$ 185.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "LeBron XIII Premium AS iD",
        price: "$ 265.00",
      },
      {
        class: "pa-0",
        sold: "-19%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "Air Jordan 1 Retro Hight Nouveau",
        price: "$ 190.00",
      },
      {
        class: "pa-0",
        sold: "-16%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "Nike Air Presto",
        price: "$ 175.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "KD 8 Premium AS iD",
        price: "$ 245.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "KD 8 Premium AS iD",
        price: "$ 245.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "KD 8 Premium AS iD",
        price: "$ 245.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "KD 8 Premium AS iD",
        price: "$ 245.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "KD 8 Premium AS iD",
        price: "$ 245.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "KD 8 Premium AS iD",
        price: "$ 245.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "KD 8 Premium AS iD",
        price: "$ 245.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "KD 8 Premium AS iD",
        price: "$ 245.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "KD 8 Premium AS iD",
        price: "$ 245.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "KD 8 Premium AS iD",
        price: "$ 245.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "KD 8 Premium AS iD",
        price: "$ 245.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image:
          "https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg",
        title: "KD 8 Premium AS iD",
        price: "$ 245.00",
      },
    ],
  }),
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
