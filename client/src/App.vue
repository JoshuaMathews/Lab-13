<script setup>
import WouldYouRather from "./components/WouldYouRather.vue";
import wyrService from "./services/wyrService.js";

import { ref, onMounted } from 'vue'


const wyrQuestion = ref('')
const wyrAnswer1 = ref("")
const wyrAnswer2 = ref("")

const userSelection = ref('')

onMounted(() => {
  wyrService.getRandomWYR().then((wyrData) => {
    console.log(wyrData)
    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })
})

function updateUserSelection(userChoice) {
  userSelection.value = `Thank you for choosing ${userChoice}!`
  console.log(userSelection.value)
}

</script>

<template>
  <h1>Would You Rather?</h1>

  <would-you-rather
      v-bind:question="wyrQuestion"
      v-bind:answer1="wyrAnswer1"
      v-bind:answer2="wyrAnswer2"
      v-on:answer-selected="updateUserSelection">
  </would-you-rather>

  {{ userSelection }}
</template>

<style scoped>

</style>
