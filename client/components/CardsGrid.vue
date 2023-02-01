<template>
  <div class="grid_container" @keydown.esc="close()">
    <div class="cards_container">
      <div v-for="(card, index) in cards" :key="index" class="odd">
        <div class="card" @click="open(card)">
          <div class="card_text_container">
            <h2>{{ card.title }}</h2>
            <h3>{{ card.number }}</h3>
          </div>
          <div class="img_container" :style="card.background">
            <picture>
              <source media="(min-width:600px)" :srcset="card.url_square">
              <source media="(min-width:200px)" :srcset="card.url_small">
              <img :src="card.url_square_jpg" :alt="index">
            </picture>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-vue">
      <transition name="fade">
        <div v-if="showModal" class="overlay" @click="close()" @keydown.esc="close()">
          <div v-if="showModal" class="modal" @click.stop>
            <SliderComponent :inumber="cardSelected.id" @close-card="close" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardsGrid',
  data () {
    return {
      showModal: false,
      cards: [{
        id: 1,
        number: '1.',
        title: this.$t('fruit_1'),
        plural: this.$t('fruit_1_plural'),
        url_large: 'assets/images/big_fruits/tomaten.jpg',
        url_small: 'assets/images/big_fruits/tomaten.webp',
        url_square: 'assets/images/big_fruits/tomaten_square.jpg',
        url_square_jpg: 'assets/images/big_fruits/tomaten_small.jpg',
        background: '#8D1614',
        good: this.$t('fruit_1_good'),
        bad: this.$t('fruit_1_bad')
      }, {
        id: 2,
        number: '2.',
        title: this.$t('fruit_2'),
        plural: this.$t('fruit_2_plural'),
        url_large: 'assets/images/big_fruits/citronen.jpg',
        url_small: 'assets/images/big_fruits/citronen.webp',
        url_square: 'assets/images/big_fruits/citronen_square.jpg',
        url_square_jpg: 'assets/images/big_fruits/citronen_small.jpg',
        background: '#E79000',
        good: this.$t('fruit_2_good'),
        bad: this.$t('fruit_2_bad')
      }, {
        id: 3,
        number: '3.',
        title: this.$t('fruit_3'),
        plural: this.$t('fruit_3_plural'),
        url_large: 'assets/images/big_fruits/avocadon.jpg',
        url_small: 'assets/images/big_fruits/avocadon.webp',
        url_square: 'assets/images/big_fruits/avocadon_square.jpg',
        url_square_jpg: 'assets/images/big_fruits/avocadon_small.jpg',
        background: '#5F6805',
        good: this.$t('fruit_3_good'),
        bad: this.$t('fruit_3_bad')
      }, {
        id: 4,
        number: '4.',
        title: this.$t('fruit_4'),
        plural: this.$t('fruit_4_plural'),
        url_large: 'assets/images/big_fruits/bananen.jpg',
        url_small: 'assets/images/big_fruits/bananen.webp',
        url_square: 'assets/images/big_fruits/bananen_square.jpg',
        url_square_jpg: 'assets/images/big_fruits/bananen_small.jpg',
        background: '#5F6805',
        good: this.$t('fruit_4_good'),
        bad: this.$t('fruit_4_bad')
      }, {
        id: 5,
        number: '5.',
        title: this.$t('fruit_5'),
        plural: this.$t('fruit_5_plural'),
        url_large: 'assets/images/big_fruits/mangon.jpg',
        url_small: 'assets/images/big_fruits/mangon.webp',
        url_square: 'assets/images/big_fruits/mangon_square.jpg',
        url_square_jpg: 'assets/images/big_fruits/mangon_small.jpg',
        background: '#8D1614',
        good: this.$t('fruit_5_good'),
        bad: this.$t('fruit_5_bad')
      }, {
        id: 6,
        number: '6.',
        title: this.$t('fruit_6'),
        plural: this.$t('fruit_6_plural'),
        url_large: 'assets/images/big_fruits/grapefrukten.jpg',
        url_small: 'assets/images/big_fruits/grapefrukten.webp',
        url_square: 'assets/images/big_fruits/grapefrukten_square.jpg',
        url_square_jpg: 'assets/images/big_fruits/grapefrukten_small.jpg',
        background: '#E79000',
        good: this.$t('fruit_6_good'),
        bad: this.$t('fruit_6_bad')
      }, {
        id: 7,
        number: '7.',
        title: this.$t('fruit_8'),
        plural: this.$t('fruit_8_plural'),
        url_large: 'assets/images/big_fruits/apelsinen.jpg',
        url_small: 'assets/images/big_fruits/apelsinen.webp',
        url_square: 'assets/images/big_fruits/apelsinen_square.jpg',
        url_square_jpg: 'assets/images/big_fruits/apelsinen_small.jpg',
        background: '#E79000',
        good: this.$t('fruit_8_good'),
        bad: this.$t('fruit_8_bad')
      }, {
        id: 8,
        number: '8.',
        title: this.$t('fruit_7'),
        plural: this.$t('fruit_7_plural'),
        url_large: 'assets/images/big_fruits/melonen.jpg',
        url_small: 'assets/images/big_fruits/melonen.webp',
        url_square: 'assets/images/big_fruits/melonen_square.jpg',
        url_square_jpg: 'assets/images/big_fruits/melonen_small.jpg',
        background: '#5F6805',
        good: this.$t('fruit_7_good'),
        bad: this.$t('fruit_7_bad')
      }, {
        id: 9,
        number: '9.',
        title: this.$t('fruit_9'),
        plural: this.$t('fruit_9_plural'),
        url_large: 'assets/images/big_fruits/jordgubben.jpg',
        url_small: 'assets/images/big_fruits/jordgubben.webp',
        url_square: 'assets/images/big_fruits/jordgubben_square.jpg',
        url_square_jpg: 'assets/images/big_fruits/jordgubben_small.jpg',
        background: '#8D1614',
        good: this.$t('fruit_9_good'),
        bad: this.$t('fruit_9_bad')
      }],
      cardSelected: null
    }
  },
  methods: {
    open (card) {
      this.cardSelected = card
      this.showModal = true
    },
    close () {
      this.cardSelected = null
      this.showModal = false
    }
  }

}
</script>

<style lang="scss" scoped>
@import "~@/styles/_variables";

//Slide Fade

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

// FADE
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.grid_container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 1.2rem 0;
}

// Bounce
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.modal-vue {
  .overlay {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .modal {
    position: relative;
    top: 250px;
    height: 310px;
    width: 310px;
    z-index: 9999;
    margin: 0 auto;
    background-color: $card-prim;
    border-radius: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    box-shadow: 0px 30px 30px 0px rgba(0, 0, 0, 0.5);
  }

  .close {
    position: absolute;
    z-index: 100;
    top: 10px;
    right: 15px;
    border: none;
    background: none;
    font-size: 30px;
    color: white;
  }
}

.cards_container {
  display: grid;

  grid-template-columns: repeat(3, 110px);
  grid-template-rows: (auto-fit, minmax(110px, 1fr));
  grid-auto-rows: 1fr;
  gap: .7em;
  height: 100%;
}

.card_text_container {
  display: none;
}

.card {
  background: $card-prim;
  border-radius: 15px;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.65);
  height: 107px;
  width: 107px;
  display: grid;
  place-items: center;
}

.card:hover {
  transition: .5s;
  transform: scale(1.01);
  cursor: pointer;
}

// .odd:hover {
//   rotate: 0deg;
// }

.odd:nth-child(odd) {
  transition: .5s;
  transform: rotate(1.5deg);
}

.odd:nth-child(even) {
  transition: .5s;
  transform: rotate(-1.5deg);
}

.odd:hover:nth-child(odd) {
  transition: .5s;
  transform: rotate(-1.5deg);
}

.odd:hover:nth-child(even) {
  transition: .5s;
  transform: rotate(1.5deg);
}

.odd:nth-child(2) {
  transform: rotate(0deg);
}

.odd:hover:nth-child(2) {
  transform: rotate(-1.5deg);
}

.odd:nth-child(3) {
  transform: rotate(-1.5deg);
}

.odd:hover:nth-child(3) {
  transform: rotate(1.5deg);
}

.odd:nth-child(6) {
  transform: rotate(0deg);
}

.odd:hover:nth-child(6) {
  transform: rotate(-1.5deg);
}

.odd:nth-child(7) {
  transform: rotate(0deg);
}

.odd:hover:nth-child(7) {
  transform: rotate(-1.5deg);
}

.img_container {
  height: 90%;
  width: 90%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  picture {
    height: 100%;
    width: 100%;
      img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}

h3 {
  transform: translate(0%, 50%)
}

@media screen and (max-width: $laptopSmall) {
  .mobile-card-display {
    display: block;
  }

  .desktop-card-display {
    display: none;
  }
}

@media screen and (min-width: $laptopSmall) {
  .grid_container {
    margin-top: 40px;
  }

  .modal-vue {
    .modal {
      top: 30%;
      height: 500px;
      width: 500px;
      box-shadow: 0px 50px 40px 0px rgba(0, 0, 0, 0.45);
    }

    .close {
      font-size: 2.5rem;
      top: 10px;
      right: 20px;
    }
  }

  .cards_container {
    display: grid;
    grid-template-columns: repeat(3, 234px);
    grid-template-rows: (auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 1fr;
    gap: 2em;
    padding: 1em;
    position: relative;
    height: 100%;
  }

  .card {
    height: 253px;
    width: 234px;
    position: relative;
  }

  .card_text_container {
    display: block;
    width: 100%;

    h2 {
      padding-left: 20px;
      position: absolute;
      left: 4px;
      top: 4px;
      font-size: 22px;
      font-family: $font-sec;
      font-weight: 400;
    }

    h3 {
      position: absolute;
      right: 18px;
      font-size: 60px;
      top: 22px;
    }
  }

  .img_container {
    height: 200px;
    width: 210px;
    border-radius: 10px;
    picture {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
      height: 100%;
      width: 195%;
      object-fit: fill;
      }
    }
  }
}
</style>
