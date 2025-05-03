<template>
  <div class="market-card">
    <div class="market-card__icon-holder">
      <MarketIcon :marketItem="marketItem.name" />
    </div>
    <div class="market-card__info">
      <h2>{{ marketItem.name }}</h2>
      <div class="market-card__info-price">
        <Gold />
        <p>{{ getFormattedNumber(marketItem.cost) }}</p>
      </div>
      <p class="market-card__description">{{ marketItem.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MarketItemType } from '../../types';
import Gold from '../../assets/icons/Gold.vue';
import MarketIcon from '../../assets/icons/MarketIcon.vue';
import getFormattedNumber from '../../utils/NumberFormatter'

defineProps<{
  marketItem: MarketItemType
}>()
</script>

<style lang="scss" scoped>
@use './marketCard.scss' as *;
</style>