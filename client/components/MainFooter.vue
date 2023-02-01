<template>
  <div>
    <div class="footer_pagedivider" />
    <div id="grid-item1" class="footer_container">
      <div class="footer_flex-item">
        <a :href="$t('footer_insamlingskontroll')" target="_blank">
          <img
            src="../assets/logos/insamlingskontroll_logga.svg"
            alt="konto-logo"
            class="footer_logo"
            loading="lazy"
          >
        </a>
      </div>

      <div id="grid-item2" class="footer_flex-item">
        <div class="footer_flex-item--middle">
          <p class="footer_item footer_item-text footer_item-fixedwidth">
            {{ $t("footer_gifts") }}
            <a :href="$t('footer_gifts_link')" target="_blank">{{ $t("footer_read_more") }}</a>
          </p>
        </div>
      </div>

      <div id="grid-item3" class="footer_flex-item">
        <div class="footer_item-socials">
          <a :href="$t('social_fb')" target="_blank"><img src="../assets/logos/facebook-square.svg" alt="facebook" class="socials_logo" loading="lazy"></a>
          <a :href="$t('social_tw')" target="_blank"><img src="../assets/logos/twitter-square.svg" alt="twitter" class="socials_logo" loading="lazy"></a>
          <a :href="$t('social_yt')" target="_blank"><img src="../assets/logos/youtube-square.svg" alt="you-tube" class="socials_logo" loading="lazy"></a>
          <a :href="$t('social_ig')" target="_blank"><img src="../assets/logos/instagram.svg" alt="instagram" class="socials_logo" loading="lazy"></a>
        </div>
        <p id="follow-us">
          Följ oss!
        </p>
      </div>

      <div id="grid-item4" class="footer_flex-item">
        <p class="footer_item-text desktop-lineheight">
          {{ $t("footer_plusgiro") }}
        </p>
        <p class="footer_item-text desktop-lineheight">
          {{ $t("footer_bankgiro") }}
        </p>
        <p class="footer_item-swish desktop-lineheight footer_item-text">
          Swish: <span style="text-style:underline;font-size:inherit">900 37 24</span><br class="hide-br">
          <a
            :href="$t('footer_swish_link')"
            target="_blank"
            class="desktop-reverse-lineheight"
          >
            {{ $t("footer_swish_cta") }}
          </a>
        </p>
      </div>

      <div id="grid-item5" class="footer_flex-item">
        <a
          :href="externalLinks[0].href"
          :target="externalLinks[0].target"
        >
          <h4>{{ externalLinks[0].label }}</h4>
        </a>
        <a :href="$t('footer_piipolicy_link')" target="_blank">
          <h4>{{ $t("footer_piipolicy") }}</h4>
        </a>
      </div>

      <div id="grid-item6" class="footer_flex-item">
        <p class="footer_item-text footer_item-lineheight--L">
          {{ $t("footer_orgnr") }}
        </p>
        <p class="footer_item-text footer_item-lineheight--L">
          {{ $t("footer_phone") }}
        </p>
        <a href="mailto:info@oxfam.se">
          <h4 class="footer_item-lineheight--L">{{ $t("footer_email") }}</h4>
        </a>
        <a :href="$t('footer_newsletter_link')" target="_blank">
          <h4 class="footer_item-lineheight--XL">{{ $t("footer_newsletter_header") }}</h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainFooter',
  data () {
    return {
      externalLinks: [
        {
          label: this.$t('footer_oxfam'),
          href: this.$t('footer_oxfam_link'),
          target: '_blank'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/_variables";

.footer_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 270px;
  margin: 32px auto 145px;
  text-align: center;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 11px;
}

.footer_pagedivider {
  width: 77%;
  height: 1px;
  background-color: black;
  margin: 0 auto;
}

a {
  text-decoration: underline;
  font-weight: $bold;
  line-height: 20px;
  font-size: 11px;
}

h4 {
  font-size: 11px;
  line-height: 16px;
}

.socials_logo {
  margin: 0px 4px;
  height: 30px;
  content-visibility: auto;
}

#follow-us {
  display: none;
  font-size: 13px;
}

.footer_item {
  margin-bottom: 15px;
}

.footer_item-text {
  font-size: 11px;
  line-height: 16px;
}

.footer_item-lineheight--L {
  line-height: 20px;
}
.footer_item-lineheight--XL {
  line-height: 24px;
}

.footer_item-fixedwidth {
  max-width: 252px;
}

.footer_item-socials {
  margin-bottom: 30px;
  content-visibility: auto;
}

.footer_item-swish {
  margin-bottom: 20px;
}

.footer_logo {
  width: 125px;
  margin-bottom: 15px;
  content-visibility: auto;
}

.hide-br {
  display: none;
}

@media screen and (min-width: $laptopSmall) {
  a {
    font-size: 13px;
  }
  .footer_pagedivider {
    width: 933px;
  }
  .footer_container {
    width: 90vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    margin-top: 40px;
    max-width: 770px;
    gap: 10px;
  }

  h4 {
    font-size: 13px;
  }

  .footer_logo {
    width: 185px;
  }

  #follow-us {
    display: block;
    font-weight: $bold;
  }

  .footer_item-text {
    font-size: 13px;
  }
  .desktop-lineheight {
    line-height: 24px;
  }
  .footer_item-lineheight--XL {
    line-height: 32px;
  }
  .desktop-reverse-lineheight {
    display: block;
    font-size: 13px;
    transform:  translateY(-6px);
  }

  .footer_item-socials {
    width: 72px;
    height: 64px;
    display: flex;
    align-content: space-between;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 0;
  }

  .footer_flex-item {
    width: 270px;
    margin-right: -79px;
  }

  .footer_flex-item--middle{
    width: 70%;
  }

  .hide-br {
    display: inline;
  }

  #grid-item1 {
    order: 1;
  }
  #grid-item2 {
    order: 2;
  }
  #grid-item3 {
    order: 4;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  #grid-item4 {
    order: 5;
  }
  #grid-item5 {
    order: 3;
    display: flex;
    flex-direction: column;
    gap: 17px;
  }
  #grid-item6 {
    order: 6;
  }
}
</style>
