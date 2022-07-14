<script setup lang="ts">
import type { UserProps } from "./FollowerSuggestion.vue";
import FollowerSuggestion from "./FollowerSuggestion.vue";
</script>

<template>
  <div>
    <div id="inputArea" class="d-flex flex-column">
      <textarea
        class="inputText"
        rows="1"
        placeholder="O que você está pensando"
        style="overflow: hidden; resize: none"
      ></textarea>
      <span id="replyConfig">
        <i class="bi bi-globe2"></i>
        Everyone can reply
      </span>
    </div>
    <div class="d-flex flex-row justify-content-between">
      <ul id="multimidea" class="d-flex flex-row">
        <li class="d-flex justify-content-center align-self-center p-2">
          <i class="bi bi-image p-1"></i>
        </li>
        <li class="d-flex justify-content-center align-self-center p-2">
          <i class="bi bi-filetype-doc p-1"></i>
        </li>
        <li class="d-flex justify-content-center align-self-center p-2">
          <i class="bi bi-emoji-smile p-1"></i>
        </li>
        <li class="d-flex justify-content-center align-self-center p-2">
          <i class="bi bi-bar-chart p-1"></i>
        </li>
        <li class="d-flex justify-content-center align-self-center p-2">
          <i class="bi bi-calendar-event p-1"></i>
        </li>
        <li class="d-flex justify-content-center align-self-center p-2">
          <i class="bi bi-geo-alt-fill p-1"></i>
        </li>
      </ul>
      <div class="d-flex flex-row justify-content-between align-items-center">
        <p class="p-3 counter">0</p>
        <i class="bi bi-grip-vertical p-1"></i>
        <div class="d-flex justify-content-center align-self-center p-2">
          <i class="bi bi-plus-circle p-1"></i>
        </div>
        <button type="button" class="btn btn-primary sendT" disabled>
          Enviar
        </button>
      </div>
    </div>
  </div>
</template>
