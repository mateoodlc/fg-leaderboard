<template>
  <Header @refresh="gameStore.fetchMarket" />
  <main class="market__content">
    <ul class="market__list">
      <li v-memo class="market__list-item" v-for="item in gameStore.marketItems" :key="item.id">
        <MarketCard :marketItem="item" />
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import Header from '../../components/Header/Header.vue'
import MarketCard from '../../components/MarketCard/MarketCard.vue'
import { useGameStore } from '../../stores/useGameStore'

const gameStore = useGameStore()
defineEmits<{
  (e: 'refresh'): void
}>()
</script>

<style lang="scss" scoped>
@use './market.scss' as *;
</style>