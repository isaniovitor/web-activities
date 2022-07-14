<script setup lang="ts">
import type { UserProps } from "./FollowerSuggestion.vue";

export interface TzeetProps {
  user: UserProps;
  publicationData: string;
  tzeetBody: string;
  replyNumber: number;
  retzeetNumber: number;
  likeNumber: number;
}
defineProps<{
  data: TzeetProps;
}>();
</script>

<template>
  <div class="tzeet">
    <div class="tzeetHeader">
      <p class="name">{{ data.user.name }}</p>
      <p class="nickName">{{ data.user.nickName }}</p>
      <p class="tzeetData">{{ data.publicationData }}</p>
    </div>

    <p class="tzeetText">
      {{ data.tzeetBody }}
    </p>

    <ul id="actions" class="d-flex justify-content-center align-self-center">
      <li
        id="replyShare"
        class="d-flex col-2 justify-content-center align-self-center"
      >
        <i
          class="bi bi-chat d-flex col-2 justify-content-center align-self-center"
        ></i>
        <a href="#">{{ data.replyNumber }}</a>
      </li>
      <li
        id="retzeet"
        class="d-flex col-2 justify-content-center align-self-center"
      >
        <i
          class="bi bi-arrow-repeat d-flex col-2 justify-content-center align-self-center"
        ></i>
        <a href="#">{{ data.retzeetNumber }}</a>
      </li>
      <li
        id="like"
        class="d-flex col-2 justify-content-center align-self-center"
      >
        <i
          class="bi bi-heart d-flex col-2 justify-content-center align-self-center"
        ></i>
        <a href="#">{{ data.likeNumber }}</a>
      </li>
      <li class="d-flex col-2 justify-content-center align-self-center">
        <i
          class="bi bi-download d-flex col-2 justify-content-center align-self-center"
        ></i>
        <a href="#">Up</a>
      </li>
    </ul>
  </div>
</template>
