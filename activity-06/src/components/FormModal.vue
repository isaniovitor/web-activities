<script setup lang="ts">
import { onMounted } from "vue";
import TzeetForm from "./TzeetForm.vue";

onMounted(() => {
  const closeModal: any = document.getElementById("closeModel");
  const modal: any = document.getElementById("modal");

  closeModal.onclick = function () {
    modal.style.display = "none";
  };
});
</script>

<template>
  <div id="modal" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Tzeet</h5>
          <i id="closeModel" class="bi bi-x-lg"></i>
        </div>
        <div class="modal-body">
          <TzeetForm />
        </div>
      </div>
    </div>
  </div>
</template>
