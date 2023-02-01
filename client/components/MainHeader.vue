<template>
  <header>
    <h1 class="landing_title">
      {{ $t('landing_header') }}
    </h1>
    <p class="landing_body_mobile">
      {{ $t('landing_body_mobile') }}
    </p>
    <p class="landing_body_desktop">
      {{ $t('landing_body_desktop') }}
    </p>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "~@/styles/_variables";

header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 45px;
}
.landing_title {
  max-width: 358px;
  text-align: center;
}

.landing_body_mobile {
  text-align: left;
  max-width: 311px;
  margin-top: 10px;
  font-size: 18px;
  font-family: $font-sec;
  line-height: 21px;
}

.landing_body_desktop {
  display: none;
}

@media screen and (min-width: $laptopSmall) {
  header {
    margin-top: 55px;
  }
  .landing_title {
    max-width: 750px;
    font-size: 70px;
    line-height: 75px;
  }

  .landing_body_mobile {
    display: none;
  }
  .landing_body_desktop {
    display: block;
    max-width: 720px;
    font-size: 20px;
    line-height: 25px;
    margin-top: 16px;
    font-family: $font-sec;
  }
}

</style>
