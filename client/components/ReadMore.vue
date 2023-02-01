<template>
  <div class="readmore_container">
    <h2 id="heading--smaller" class="readmore_heading">
      {{ $t('landing_ask_a_question_header') }}
    </h2>
    <p class="readmore_heading-body">
      {{ $t('landing_ask_a_question_body') }}
    </p>
    <div class="readmore_question_container">
      <div class="readmore_bubble">
        <p class="readmore_question--bubblequote" @click="generateQuestion">
          {{ question }}
        </p>
      </div>
      <div class="readmore_icons icons-left">
        <img src="../assets/logos/readmore-icons-left.svg" alt="decorative icons" loading="lazy">
      </div>
      <div class="readmore_icons icons-right">
        <img src="../assets/logos/readmore-icons-right.svg" alt="decorative icons" loading="lazy">
      </div>
    </div>
    <div class="readmore_subsection">
      <h2 class="readmore_heading">
        {{ $t('landing_readmore_header') }}
      </h2>
      <p class="readmore_heading-body body--second">
        {{ $t('landing_readmore_body') }}
      </p>
    </div>
    <ReadMoreList />
    <img src="../assets/logos/oxfam-logo-black.png" alt="oxfam_logo" class="oxfam_logo" loading="lazy">
    <p class="legal">
      {{ $t('footer_legal') }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ReadMore',
  data () {
    return {
      question: String,
      interval: null,
      questions: [
        this.$t('landing_question_1_body'),
        this.$t('landing_question_2_body'),
        this.$t('landing_question_3_body'),
        this.$t('landing_question_4_body'),
        this.$t('landing_question_5_body')
      ]
    }
  },
  mounted () {
    this.generateQuestion()
  },
  created () {
    this.interval = setInterval(() => {
      this.generateQuestion()
    }, 5000)
  },
  destroyed () {
    clearInterval(this.interval)
  },
  methods: {
    generateQuestion () {
      const index = Math.floor(Math.random() * this.questions.length)
      this.question = this.questions[index]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/_variables";

.readmore_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 22px auto 0;
  text-align: center;
  overflow-x: hidden;
}

.readmore_heading {
  line-height: 26px;
  font-size: 22px;
  font-family: $font-prim;
}

#heading--smaller {
  max-width: 237px;
}

.readmore_heading-body {
  font-family: $font-sec;
  line-height: 18px;
  max-width: 320px;
  margin: 8px 0px 16px;
}

.body--second {
  max-width: 260px;
  line-height: 20px;
  margin: 10px auto;
}

.readmore_question_container {
  position: relative;
  width: 162px;
  height: 156px;
  margin: 8px 0 24px;
}

.readmore_question--bubblequote {
  color: $bg-prim;
  max-width: 118px;
  font-size: 12px;
  font-weight: $bold;
  font-family: $font-prim;
  line-height: 15px;
  transform: translateX(4px);
}

.readmore_bubble {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/logos/speech-bubble.svg');
  background-repeat: no-repeat;
  background-size: 100%;
}

.readmore_icons {
  position: absolute;
  top: -18px;
  transform: scale(0.7);
}

.icons-left {
  left: -175px;
}

.icons-right {
  right: -160px;
}

.readmore_subsection {
  margin: 8px 0 20px;
}

.oxfam_logo {
  width: 163px;
  margin: 35px auto 45px;
}

.legal {
  font-family: $font-legal;
  font-size: 11px;
  line-height: 14px;
  max-width: 254px;
  margin-bottom: 40px;
}

@media screen and (min-width: $laptopSmall) {
  .readmore_container {
    margin: 42px auto 0;
    max-width: 610px;
  }

  .readmore_heading {
    font-size: 30px;
    line-height: 38px;
  }

  #heading--smaller {
    max-width: 600px;
    font-size: 32px;
  }

  .readmore_heading-body {
    max-width: 442px;
    font-size: 15px;
    line-height: 20px;
  }

  .readmore_heading-body--second {
    max-width: 500px;
    font-size: 15px;
    margin: 10px auto;
  }

  .readmore_question_container {
    width: 214px;
    height: 206px;
  }
  .readmore_question--bubblequote {
    max-width: 160px;
    font-size: 16px;
    line-height: 20px;
    transform: translateX(5px);
  }

  .readmore_icons {
    top: 5px;
    transform: scale(1);
  }
  .icons-left {
    left: -200px;
  }

  .icons-right {
    right: -195px;
  }

  .readmore_heading {
    font-size: 30px;
  }

  .oxfam_logo {
    width: 253px;
    margin-top: 45px;
    margin-bottom: 55px;
  }

  .legal {
    font-size: 13px;
    max-width: 550px;
    line-height: 16px;
    margin-bottom: 52px;
  }

}
</style>
