<script setup lang="ts">
import FollowerSuggestionSection from "@/components/FollowerSuggestionSection.vue";
import SideBar from "@/components/SideBar.vue";
import Tzeet, { type TzeetProps } from "@/components/Tzeet.vue";
import TzeetForm from "@/components/TzeetForm.vue";
import FormModal from "@/components/FormModal.vue";
import type { UserProps } from "@/components/FollowerSuggestion.vue";
import { onMounted } from "vue";

const user: UserProps = { name: "Isa", nickName: "@isaniovitor" };
const tzeets: TzeetProps[] = [
  {
    user: user,
    publicationData: "01/02/2020",
    tzeetBody:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, consectetur optio? Excepturi cum expedita eligendi nobis. Earum, nisi! Nobis quo distinctio saepe illum. Soluta repellat vitae explicabo non excepturi. Reprehenderit.",
    replyNumber: 232,
    retzeetNumber: 234,
    likeNumber: 32,
  },
  {
    user: user,
    publicationData: "01/02/2020",
    tzeetBody:
      "Excepturi cum expedita eligendi nobis. Earum, nisi! Nobis quo distinctio saepe illum. Soluta repellat vitae explicabo non excepturi. Reprehenderit.",
    replyNumber: 232,
    retzeetNumber: 234,
    likeNumber: 32,
  },
];

onMounted(() => {
  const inputs: any = document.getElementsByClassName("inputText");
  const counter: any = document.getElementsByClassName("counter");
  const button: any = document.getElementsByClassName("sendT");
  const listInputs: any = [];

  for (let i = 0; i < inputs.length; i++) {
    listInputs.push({
      input: inputs[i],
      button: button[i],
      counter: counter[i],
    });

    listInputs[i].input.onkeyup = function () {
      console.log("0");
      itsValid(this.value, listInputs[i]);

      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    };
  }

  function itsValid(value: any, input: any) {
    const maxLength = 140;
    input.counter.textContent = `${value.length}`;

    if (value.length > 0) {
      input.counter.style.display = "block";
      input.button.disabled = false;
    } else {
      input.counter.style.display = "none";
      input.button.disabled = true;
    }

    if (value.length >= maxLength - 40 && value.length <= maxLength) {
      input.counter.style.color = "rgb(255, 200, 0)";
    } else if (value.length >= maxLength) {
      input.counter.style.color = "rgb(255, 0, 0)";
      input.button.disabled = true;
    } else {
      input.counter.style.color = "black";
    }

    return true;
  }
});
</script>

<template>
  <main class="row">
    <SideBar />
    <FollowerSuggestionSection />

    <main class="container col-10 col-sm-10 col-md-10 col-lg-7 order-1">
      <h1>Home</h1>

      <FormModal />

      <RouterView />

      <div v-for="(tzeet, i) in tzeets" :key="i">
        <Tzeet :data="tzeet" />
      </div>
    </main>
  </main>
</template>
