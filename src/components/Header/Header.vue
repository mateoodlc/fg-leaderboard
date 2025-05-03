<template>
  <header class="header">
    <h1 class="header__title">Fishing Game</h1>
    <div class="header__content">
      <div class="header__tabs">
        <RouterLink class="header__tabs-link" :to="{ name: 'dashboard' }">Leaderboard</RouterLink>
        <RouterLink class="header__tabs-link" :to="{ name: 'market' }">Market</RouterLink>
      </div>
      <button class="header__refresh-button" @click="handleRefresh">
        <span class="header__last-updated">
          {{ lastUpdatedTime }}
        </span>
        <Sync class="header__refresh-icon" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import Sync from '../../assets/icons/Sync.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const getLastUpdatedFormatted = (time: Date): string => {
  return `Last Updated: ${time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })}`
}
const emits = defineEmits<{
  (e: 'refresh'): void
}>()
const lastUpdatedTime = ref(getLastUpdatedFormatted(new Date()));

const handleRefresh = () => {
  emits('refresh')
  lastUpdatedTime.value = getLastUpdatedFormatted(new Date());
}
</script>

<style lang="scss" scoped>
@use './header.scss' as *;
</style>