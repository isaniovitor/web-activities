<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
/* nav */
nav {
  list-style-type: none;

  margin: 0;
  padding: 0;
}

.navChild {
  padding: 10px 0;
}

.navChild button {
  border-radius: 40px;
}

.navChild button p {
  padding: 10px 50px;
  margin: 0 !important;
  border-radius: 40px;
}

.navChild:hover:not(:first-child, :last-child) {
  background-color: rgba(15, 25, 20, 0.1);
  color: rgb(15, 20, 25);
}

.navChild a {
  color: rgb(15, 20, 25);
}

.navChild a:hover {
  color: rgb(15, 20, 25);
}

/* main */
main {
  padding: 0 10px;
  padding-top: 5px;
}

#imageSection {
  display: flex;
  flex-direction: row;
}

#imageSection img {
  width: 64px;
  height: 64px;
}

#imageSection div button {
  width: 125px;
  border-radius: 40px;
}

#replyConfig {
  color: rgb(29, 155, 240);
}

#replyConfig:hover {
  width: fit-content;
  color: #fff;
  background-color: rgb(29, 155, 240);
  border-radius: 10px;
}

#multimidea {
  margin: 0;
  padding: 0;
}

#multimidea li i:hover {
  background-color: rgb(29, 155, 240);
  border-radius: 10px;
}

#counter {
  display: none;
}

#counter ~ div > i:hover {
  background-color: rgb(29, 155, 240);
  border-radius: 10px;
}

/* profile */
#inputArea textarea {
  font-size: 20px;
  border: none;
}

.name {
  color: rgb(15, 20, 25);
}

.nickName {
  color: rgb(83, 100, 113);
}

#description {
  color: rgb(15, 20, 25);
}

/* localization */
#localizationSection {
  display: flex;
  flex-direction: row;

  gap: 30px;
}

.localizationChild a {
  color: rgb(83, 100, 113);
}

.localizationChild a:hover {
  color: rgb(83, 100, 113);
}

/* statistic */
#statisticSection {
  display: flex;
  flex-direction: row;

  gap: 23px;
}

.statisticChild a {
  color: rgb(83, 100, 113);
  text-decoration: none;
}

.statisticChild a:hover {
  color: rgb(83, 100, 113);
  text-decoration: underline !important;
}

.statisticChild a:hover {
  text-decoration: underline;
}

.statisticChild a strong {
  color: rgb(15, 20, 25);
  font-weight: bold;
}

/* menu */
.menuChild {
  padding: 10px 0;
}

.menuChild:hover {
  background-color: rgba(0, 0, 0, 0.3);

  color: rgb(15, 20, 25);
}

.menuChild a {
  color: rgb(15, 20, 25);
}

.menuChild a:hover {
  color: rgb(15, 20, 25);
}

/* tzeet */
.tzeet:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.tzeetHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

.tzeetData {
  color: rgb(83, 100, 113);
}

.tzeetText {
  color: rgb(15, 20, 25);
}

/* actions */
#actions {
  padding: 0;
}

#actions li i {
  padding: 3px 10px;
  border-radius: 10px;
}

#actions li a {
  color: rgb(83, 100, 113);
  padding: 5px;

  border-radius: 10px;
}

#actions li a:hover {
  text-decoration: underline;
}

#replyShare:hover i {
  background: rgba(29, 155, 240, 0.1);
}

#replyShare:hover a {
  color: rgba(29, 155, 240, 1);
}

#retzeet:hover i {
  background: rgba(0, 186, 124, 0.1);
}

#retzeet:hover a {
  color: rgba(0, 186, 124, 1);
}

#like:hover i {
  background: rgba(249, 24, 128, 0.1);
}

#like:hover a {
  color: rgba(249, 24, 128, 1);
}

/* aside */
aside {
  padding: 10px;
}

.inputSearch {
  background-color: rgb(239, 243, 244);
  border-radius: 40px;
  padding: 10px;
}

.inputSearch input {
  background-color: rgb(239, 243, 244);
  width: 100%;
  border: none;
}

.inputSearch input:focus {
  border: none;
}

/* suggestionSection */
.suggestionSection {
  background-color: rgb(239, 243, 244);
  margin-top: 10px;
  padding: 10px;
}

.suggestionSection > a {
  text-align: center;
  padding-left: 30px;
  text-decoration: underline !important;
}

.suggestionSection a:hover {
  color: #007bff !important;
}

/* suggestion */
.suggestion {
  padding: 5px;
}

.suggestion img {
  width: 48px;
  height: 48px;
}

.suggestion a {
  text-align: center;
}
</style>
