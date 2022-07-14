<script setup lang="ts">
export interface UserProps {
  name: string;
  nickName: string;
}
defineProps<{
  follower: UserProps;
}>();
</script>

<template>
  <div class="d-flex col justify-content-center align-self-center suggestion">
    <img
      class="col-5 col-lg-4"
      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    />
    <a class="col justify-content-center align-self-end" href="#">{{
      follower.name
    }}</a>
    <div class="col justify-content-center align-self-center">
      <button type="button" class="btn btn-primary">Seguir</button>
    </div>
  </div>
</template>
