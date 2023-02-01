<template>
  <div id="app">
    <MainHeader />
    <CardsGrid />
    <MainAccordions />
    <ReadMore />
    <MainFooter />

    <CookieModal
      v-show="isModalVisible"
      @close="closeModal"
      @decline="setCookies"
      @accept="setCookies"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isModalVisible = ref(true)
// const body = document.querySelector('body')

// Hide modal when user clicks a button
function closeModal () {
  isModalVisible.value = false
}

// do something with the selected cookies like store them in a cookie session
function setCookies (selectedCookies) {
  // console.log('Selected:', selectedCookies)
}

</script>

<style lang="scss">
@import '~@/styles/app';
@import '~@/styles/_variables';

</style>
