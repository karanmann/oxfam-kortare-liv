<template>
  <div class="accordion_wrapper">
    <button
      class="accordion_btn"
      :aria-expanded="isOpen"
      :aria-controls="`collapse${_uid}`"
      @click="toggleAccordion()"
    >
      <slot name="title" />
      <svg
        :class="{
          'down': isOpen,
          'right': !isOpen,
        }"
        width="11"
        height="19"
        viewBox="0 0 11 19"
      >
        <line
          x1="1.06066"
          y1="1.93934"
          x2="9.82995"
          y2="10.7086"
          stroke="black"
          stroke-width="3"
        />
        <line
          x1="1.16981"
          y1="17.4007"
          x2="9.9391"
          y2="8.63143"
          stroke="black"
          stroke-width="3"
        />
      </svg>
    </button>
    <div v-show="isOpen" :id="`collapse${_uid}`" class="display_desktop">
      <slot name="content" />
    </div>
    <div class="accordion_btn-border" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
      down: false,
      right: true
    }
  },

  methods: {
    toggleAccordion () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/_variables";
.display_desktop {
  display: block !important;
}
.accordion_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%
}
.accordion_btn {
width: 95%;
display: flex;
align-items: center;
justify-content: space-between;
background-color: transparent;
border: none;
padding: 10px 0px;
}

.accordion_btn-border {
  width: 100%;
  margin: .5rem auto;
  height: 1px;
  background-color: black;
}

svg {
  //width: 11px;
  //transition: all 0.3s ease;
  display: none;
}

.down {
  transform: rotate(90deg);
}

.right{
  transform: rotate(0deg);
}

@media screen and (min-width: $laptopSmall) {
  //svg {
  //  display: none;
  //}
  .accordion_wrapper {
    display: flex;
    flex-direction: column;
    min-width: 370px;
  }
  .display_desktop {
    display: block !important;
  }

  .accordion_btn-border {
    display: none;
  }
  .accordion_btn {
    padding: 9px 0 11px;
    margin: 0;
    }
}

</style>
