<template>
  <div class="accordions_container">
    <MainAccordion class="accordion_main">
      <template #title>
        <h2 class="accordion_header">
          {{ $t('landing_what_we_do_header') }}
        </h2>
      </template>
      <template #content>
        <p class="accordion_body">
          {{ $t('landing_what_we_do_body') }}
        </p>
      </template>
    </MainAccordion>
    <MainAccordion class="accordion_main">
      <template #title>
        <h2 class="accordion_header">
          {{ $t('landing_what_you_do_header') }}
        </h2>
      </template>
      <template #content>
        <p class="accordion_body">
          {{ $t('landing_what_you_do_body') }}
        </p>
      </template>
    </MainAccordion>
  </div>
</template>

<script>
import MainAccordion from './accordion/MainAccordion.vue'

export default {
  name: 'MainAccordions',
  components: {
    MainAccordion
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/_variables";
.accordions_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .accordion_main {
    max-width: 320px;
  }
  .accordion_header {
    font-family: $font-prim;
    font-size: 22px;
    line-height: 26px;
    color: #000;
  }

  .accordion_body {
    max-width: 95%;
    font-family: $font-sec;
    line-height: 18px;
    margin: 2px 0 12px;
  }
}
@media screen and (min-width: $laptopSmall) {
  .accordions_container {
    flex-direction: row;
    max-width: 800px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;

    .accordion_header {
      font-family: $font-prim;
      font-size: 32px;
      line-height: 26px;
    }
    .accordion_body {
      max-width: 100%;
      font-family: $font-sec;
      text-align: left;
      font-size: 15px;
      line-height: 20px;
      box-sizing: none;
      margin: 6px 0 12px;
    }
    .accordion_main {
      max-width: 320px;
    }

    .accordion_main:nth-of-type(2) {
      border-left: 1px solid black;
      padding-left: 20px;
    }
  }
}

</style>
