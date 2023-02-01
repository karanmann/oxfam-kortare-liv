<template>
  <div class="carousel-container">
    <VueSlickCarousel v-bind="settings" ref="carousel" class="carousel">
      <div class="carousel_card">
        <div class="card_container_top" :style="{ 'background-color': cards[0].background }">
          <button class="close" @click="$emit('close-card')">
            x
          </button>
          <h1>{{ cards[0].number }}</h1>
          <h2>{{ cards[0].title }}</h2>
          <img class="card_image" :src="cards[0].url_large" :alt="cards[0].plural" loading="lazy">
        </div>
        <div class="card_container_bottom">
          <div class="card_container_bottom_good">
            <h4>Bra med {{ cards[0].plural }}.</h4>
            <p>{{ cards[0].good }}</p>
          </div>
          <div class="desktop-divider" />
          <div class="card_container_bottom_bad">
            <h4>Mindre bra med {{ cards[0].plural }}.</h4>
            <p>{{ cards[0].bad }}</p>
          </div>
        </div>
      </div>
      <div class="carousel_card">
        <div class="card_container_top" :style="{ 'background-color': cards[1].background }">
          <button class="close" @click="$emit('close-card')">
            x
          </button>
          <h1>{{ cards[1].number }}</h1>
          <h2>{{ cards[1].title }}</h2>
          <img class="card_image" :src="cards[1].url_large" :alt="cards[1].plural" loading="lazy">
        </div>
        <div class="card_container_bottom">
          <div class="card_container_bottom_good">
            <h4>Bra med {{ cards[1].plural }}.</h4>
            <p>{{ cards[1].good }}</p>
          </div>
          <div class="desktop-divider" />
          <div class="card_container_bottom_bad">
            <h4>Mindre bra med {{ cards[1].plural }}.</h4>
            <p>{{ cards[1].bad }}</p>
          </div>
        </div>
      </div>
      <div class="carousel_card">
        <div class="card_container_top" :style="{ 'background-color': cards[2].background }">
          <button class="close" @click="$emit('close-card')">
            x
          </button>
          <h1>{{ cards[2].number }}</h1>
          <h2>{{ cards[2].title }}</h2>
          <img class="card_image" :src="cards[2].url_large" :alt="cards[2].plural" loading="lazy">
        </div>
        <div class="card_container_bottom">
          <div class="card_container_bottom_good">
            <h4>Bra med {{ cards[2].plural }}.</h4>
            <p>{{ cards[2].good }}</p>
          </div>
          <div class="desktop-divider" />
          <div class="card_container_bottom_bad">
            <h4>Mindre bra med {{ cards[2].plural }}.</h4>
            <p>{{ cards[2].bad }}</p>
          </div>
        </div>
      </div>
      <div class="carousel_card">
        <div class="card_container_top" :style="{ 'background-color': cards[3].background }">
          <button class="close" @click="$emit('close-card')">
            x
          </button>
          <h1>{{ cards[3].number }}</h1>
          <h2>{{ cards[3].title }}</h2>
          <img class="card_image" :src="cards[3].url_large" :alt="cards[3].plural" loading="lazy">
        </div>
        <div class="card_container_bottom">
          <div class="card_container_bottom_good">
            <h4>Bra med {{ cards[3].plural }}.</h4>
            <p>{{ cards[3].good }}</p>
          </div>
          <div class="desktop-divider" />
          <div class="card_container_bottom_bad">
            <h4>Mindre bra med {{ cards[3].plural }}.</h4>
            <p>{{ cards[3].bad }}</p>
          </div>
        </div>
      </div>
      <div class="carousel_card">
        <div class="card_container_top" :style="{ 'background-color': cards[4].background }">
          <button class="close" @click="$emit('close-card')">
            x
          </button>
          <h1>{{ cards[4].number }}</h1>
          <h2>{{ cards[4].title }}</h2>
          <img class="card_image" :src="cards[4].url_large" :alt="cards[4].plural" loading="lazy">
        </div>
        <div class="card_container_bottom">
          <div class="card_container_bottom_good">
            <h4>Bra med {{ cards[4].plural }}.</h4>
            <p>{{ cards[4].good }}</p>
          </div>
          <div class="desktop-divider" />
          <div class="card_container_bottom_bad">
            <h4>Mindre bra med {{ cards[4].plural }}.</h4>
            <p>{{ cards[4].bad }}</p>
          </div>
        </div>
      </div>
      <div class="carousel_card">
        <div class="card_container_top" :style="{ 'background-color': cards[5].background }">
          <button class="close" @click="$emit('close-card')">
            x
          </button>
          <h1>{{ cards[5].number }}</h1>
          <h2>{{ cards[5].title }}</h2>
          <img class="card_image" :src="cards[5].url_large" :alt="cards[5].plural" loading="lazy">
        </div>
        <div class="card_container_bottom">
          <div class="card_container_bottom_good">
            <h4>Bra med {{ cards[5].plural }}.</h4>
            <p>{{ cards[5].good }}</p>
          </div>
          <div class="desktop-divider" />
          <div class="card_container_bottom_bad">
            <h4>Mindre bra med {{ cards[5].plural }}.</h4>
            <p>{{ cards[5].bad }}</p>
          </div>
        </div>
      </div>
      <div class="carousel_card">
        <div class="card_container_top" :style="{ 'background-color': cards[6].background }">
          <button class="close" @click="$emit('close-card')">
            x
          </button>
          <h1>{{ cards[6].number }}</h1>
          <h2>{{ cards[6].title }}</h2>
          <img class="card_image" :src="cards[6].url_large" :alt="cards[6].plural" loading="lazy">
        </div>
        <div class="card_container_bottom">
          <div class="card_container_bottom_good">
            <h4>Bra med {{ cards[6].plural }}.</h4>
            <p>{{ cards[6].good }}</p>
          </div>
          <div class="desktop-divider" />
          <div class="card_container_bottom_bad">
            <h4>Mindre bra med {{ cards[6].plural }}.</h4>
            <p>{{ cards[6].bad }}</p>
          </div>
        </div>
      </div>
      <div class="carousel_card">
        <div class="card_container_top" :style="{ 'background-color': cards[7].background }">
          <button class="close" @click="$emit('close-card')">
            x
          </button>
          <h1>{{ cards[7].number }}</h1>
          <h2>{{ cards[7].title }}</h2>
          <img class="card_image" :src="cards[7].url_large" :alt="cards[7].plural" loading="lazy">
        </div>
        <div class="card_container_bottom">
          <div class="card_container_bottom_good">
            <h4>Bra med {{ cards[7].plural }}.</h4>
            <p>{{ cards[7].good }}</p>
          </div>
          <div class="desktop-divider" />
          <div class="card_container_bottom_bad">
            <h4>Mindre bra med {{ cards[7].plural }}.</h4>
            <p>{{ cards[7].bad }}</p>
          </div>
        </div>
      </div>
      <div class="carousel_card">
        <div class="card_container_top" :style="{ 'background-color': cards[8].background }">
          <button class="close" @click="$emit('close-card')">
            x
          </button>
          <h1>{{ cards[8].number }}</h1>
          <h2>{{ cards[8].title }}</h2>
          <img class="card_image" :src="cards[8].url_large" :alt="cards[8].plural" loading="lazy">
        </div>
        <div class="card_container_bottom">
          <div class="card_container_bottom_good">
            <h4>Bra med {{ cards[8].plural }}.</h4>
            <p>{{ cards[8].good }}</p>
          </div>
          <div class="desktop-divider" />
          <div class="card_container_bottom_bad">
            <h4>Mindre bra med {{ cards[8].plural }}.</h4>
            <p>{{ cards[8].bad }}</p>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
    <button class="button_prev" @click="showPrev">
      <img src="../assets/directions/chevron-left-90.png" alt="" class="button_prev_img">
    </button>
    <button class="button_next" @click="showNext">
      <img src="../assets/directions/chevron-right-90.png" alt="" class="button_next_img">
    </button>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'SliderComponent',
  components: { VueSlickCarousel },
  props: {
    inumber: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      settings: {
        arrows: false,
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchMove: true,
        swipeToSlide: true,
        swipe: true,
        accessibility: true,
        initialSlide: this.inumber - 1,
        touchThreshold: 5
      },
      cards: [{
        id: 1,
        number: '1.',
        title: this.$t('fruit_1'),
        plural: this.$t('fruit_1_plural'),
        url_large: 'assets/images/big_fruits/tomaten.jpg',
        url_small: 'assets/images/big_fruits/tomaten.webp',
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
        background: '#8D1614',
        good: this.$t('fruit_9_good'),
        bad: this.$t('fruit_9_bad')
      }],
      cardSelected: null
    }
  },
  methods: {
    showNext () {
      this.$refs.carousel.next()
    },
    showPrev () {
      this.$refs.carousel.prev()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/_variables";
.carousel-container {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.5);
  background-color: $card-prim;
  cursor: grab;
  position: relative;

  .button_prev,
  .button_next {
    //background-color: rgba(0, 0, 0, 0.85);
    background-color: rgb(81, 80, 80, 0.9);
    border:none;
    color: white;
    border-radius: 50%;
    height: 36px;
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      // background-color: rgba(0, 0, 0, 0.9);
      background-color: rgb(81, 80, 80, 0.95);
      transform: scale(1.1);
      transition: all .3s;
    }
  }

  .button_prev_img,
  .button_next_img {
    height: 20px;
    fill: white;
  }

  .button_prev{
    position:absolute;
    top: 45%;
    left:-20px
  }
  .button_next{
    position:absolute;
    top: 45%;
    right:-20px
  }

  .carousel {
    border-radius: 10px;
    .carousel_card {
      .card_container_top {
        border-radius: .7rem .7rem 0 0;
        position: relative;
        height: 55px;
        margin: 10px 10px 0px;

        h1 {
          position: absolute;
          right: 25px;
          top: 15px;
          font-size: 4rem;
        }

        h2 {
          position: absolute;
          top: 15px;
          left: 18px;
          font-size: 28px;
          color: $white;
          font-family: $font-sec;
          font-weight: 400;
        }

        p {
          font-size: 12px;
        }

        img {
          display: none;
        }

        .close{
          position: absolute;
          z-index: 100;
          top: 0px;
          right: 5px;
          border: none;
          background: none;
          font-size: 30px;
          color: white;
          display: none;

          &:hover {
            transform: scale(1.1);
            transition: all .3s;
            text-shadow: 1px 1px black
          }
        }
      }
      .card_container_bottom {
        margin: 17px auto 0px;
        max-width: 250px;
      }

      h4 {
        font-size: 18px;
        line-height: 24px;
      }
      p {
        font-size: 12px;
        font-family: $font-sec;
        line-height: 16px;
        margin-bottom: 12px;
      }
    }
  }
}
  @media screen and (min-width: $laptopSmall) {
    .desktop-divider {
      width: 1px;
      height: 200px;
      background-color: black;
    }
    .carousel-container {

      .button_prev,
      .button_next {
        height: 58px;
        width: 58px;
      }

      .button_prev_img,
      .button_next_img {
        height: 25px;
      }
      .button_prev{
        position:absolute;
        top: 45%;
        left:-35px
      }
      .button_next{
        position:absolute;
        top: 45%;
        right:-35px
      }
      .carousel {
        .carousel_card {
          .card_container_top {
            display:flex;
            align-items: center;
            justify-content: center;
            border-radius: .7rem .7rem 0 0;
            position: relative;
            height:205px;
            width: 450px;
            overflow: hidden;
            left: 25px;
            top: 28px;
            margin: 0px 0px 0px;

            h1,
            h2,
            h4 {
              display: none;
            }

            img {
              display: block;
              height: 300px;
              content-visibility: auto;
            }
            .close{
              position: absolute;
              z-index: 100;
              top: 0px;
              right: 5px;
              border: none;
              background: none;
              font-size: 30px;
              color: white;
              display: block;
            }
          }
          .card_container_bottom {
            min-width: 450px;
            margin-top: 50px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-evenly;
            margin-bottom: 1rem;
            .card_container_bottom_bad {
              max-width: 195px;
              margin-top: 5px;
            }
            .card_container_bottom_good {
              // margin-right: 1rem;
              max-width: 195px;
              margin-top: 5px;
            }
            .card_container_bottom_bad,
            .card_container_bottom_good {
              p {
                font-size: 14px;
                margin-top: 5px;
              }
              h5 {
                font-size: 24px;
              }
            }
            h4 {
              font-size: 24px;
              line-height: 28px;
              max-width: 170px;
            }
            p {
              font-size: 14px;
              font-family: $font-sec;
              line-height: 19px;
            }
          }
        }
      }
    }
  }

</style>
