<template>
  <v-col cols="2" rounded="0">
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="child in item.items" :key="child.title">
          <v-list-item-content>
            <!-- <v-container class="px-0" fluid> -->
            <v-checkbox
              id="oi"
              v-model="checkbox"
              :label="child.title"
            ></v-checkbox>
            <!-- </v-container> -->
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SideBar",

  data: () => ({
    checkbox: true,
    items: [
      {
        action: "mdi-ticket",
        items: [{ title: "List Item" }],
        title: "Attractions",
      },
      {
        action: "mdi-silverware-fork-knife",
        active: false,
        items: [
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" },
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" },
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" },
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" },
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" },
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" },
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" },
        ],
        title: "Dining",
      },
      {
        action: "mdi-school",
        items: [{ title: "List Item" }],
        title: "Education",
      },
      {
        action: "mdi-human-male-female-child",
        items: [{ title: "List Item" }],
        title: "Family",
      },
      {
        action: "mdi-bottle-tonic-plus",
        items: [{ title: "List Item" }],
        title: "Health",
      },
      {
        action: "mdi-briefcase",
        items: [{ title: "List Item" }],
        title: "Office",
      },
      {
        action: "mdi-tag",
        items: [{ title: "List Item" }],
        title: "Promotions",
      },
    ],
  }),
});
</script>

<style>
*.v-application.primary--text {
  color: blueviolet !important;
}
</style>
