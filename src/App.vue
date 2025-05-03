<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useGameStore } from './stores/useGameStore'
import { onMounted, onActivated } from 'vue'

const gameStore = useGameStore()

const loadAllData = async () => {
  await Promise.all([
    gameStore.fetchMembers(),
    gameStore.fetchMarket()
  ])
}

onMounted(loadAllData)
onActivated(loadAllData)
</script>

<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>