<template>
  <ul>
    <li class="readmore_link-group">
      <h3 class="readmore_link_header">
        {{ $t('landing_readmore_link_1_header') }}
      </h3>
      <a class="readmore_link_anchor" :href="$t('landing_readmore_link_1_url')" target="_blank" rel="Oxfam 1">{{ $t('landing_readmore_link_1_linktext') }}</a>
    </li>
    <li class="readmore_link-group">
      <h3 class="readmore_link_header">
        {{ $t('landing_readmore_link_2_header') }}
      </h3>
      <a class="readmore_link_anchor" :href="$t('landing_readmore_link_2_url')" target="_blank" rel="Oxfam 1">{{ $t('landing_readmore_link_2_linktext') }}</a>
    </li>
    <li class="readmore_link-group">
      <h3 class="readmore_link_header">
        {{ $t('landing_readmore_link_3_header') }}
      </h3>
      <a class="readmore_link_anchor" :href="$t('landing_readmore_link_3_url')" target="_blank" rel="Oxfam 1">{{ $t('landing_readmore_link_3_linktext') }}</a>
    </li>
    <li class="readmore_link-group">
      <h3 class="readmore_link_header">
        {{ $t('landing_readmore_link_4_header') }}
      </h3>
      <a class="readmore_link_anchor" :href="$t('landing_readmore_link_4_url1')" target="_blank" rel="Oxfam 1">Läs rapporten om bananer (1)</a><span><a class="readmore_link_anchor" href="https://policy-practice.oxfam.org/resources/ripe-for-change-ending-human-suffering-in-supermarket-supply-chains-620418/" target="_blank"> (2)</a></span>
    </li>
    <li class="readmore_link-group">
      <h3 class="readmore_link_header">
        {{ $t('landing_readmore_link_5_header') }}
      </h3>
      <a class="readmore_link_anchor" :href="$t('landing_readmore_link_5_url')" target="_blank" rel="Oxfam 1">{{ $t('landing_readmore_link_5_linktext') }}</a>
    </li>
    <li class="readmore_lin-group">
      <h3 class="readmore_link_header">
        {{ $t('landing_readmore_link_6_header') }}
      </h3>
      <a class="readmore_link_anchor" :href="$t('landing_readmore_link_6_url')" target="_blank" rel="Oxfam 1">{{ $t('landing_readmore_link_6_linktext') }}</a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "~@/styles/_variables";
.readmore_link_anchor {
    font-size: 15px;
    line-height: 16px;
    font-family: $font-sec;
}
.readmore_link_header {
  font-size: 17px;
  line-height: 23px;
}

.readmore_link-group {
  margin-bottom: 20px;
}

@media screen and (min-width: $laptop) {
  .readmore_link_anchor {
    font-size: 16px;
  }
  .readmore_link_header {
    font-size: 18px;
  }
}
</style>
