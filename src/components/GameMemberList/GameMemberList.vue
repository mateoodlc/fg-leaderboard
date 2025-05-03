<template>
  <div class="game-member">
    <h3 class="game-member__list-subtitle">Winners</h3>
    <ul class="game-member__list game-member__list--top">
      <li class="game-member__list-item" v-for="(member, index) in topMembers" :key="member.username">
        <span class="game-member__list-item-badge">{{ getRankSuffixBadge(index) }}</span>
        <GameMember :member="member" :maxXP="getMaxXP()" />
      </li>
    </ul>
    <ul class="game-member__list">
      <li class="game-member__list-item" v-for="member in regularMembers" :key="member.username">
        <GameMember :member="member" :maxXP="getMaxXP()" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import GameMember from '../GameMember/GameMember.vue'
import { computed } from 'vue'
import { useGameStore } from '../../stores/useGameStore'

const mockData = {
  username: 'Loading...',
  xp: 0.000,
  rank: 0,
  gold: 0.000,
  level: 99
}
const gameStore = useGameStore()

const topMembers = computed(() => {
  if (!gameStore.members.length) {
    return Array(3).fill(mockData)
  }
  return gameStore.members
    .slice()
    .sort((a, b) => b.rank + a.rank)
    .slice(0, 3)
})

const regularMembers = computed(() => {
  if (!gameStore.members.length) {
    return Array(100).fill(mockData)
  }
  return gameStore.members
    .slice()
    .sort((a, b) => b.rank + a.rank)
    .slice(3)
})

const getMaxXP = () => {
  return gameStore.members.reduce((max, member) => {
    return Math.max(max, member.xp)
  }, 0)
}

const getRankSuffixBadge = (rankIndex: number) => {
  const rankBadges = [
    '🥇',
    '🥈',
    '🥉'
  ]
  return rankBadges[rankIndex];
}
</script>

<style lang="scss">
@use './gameMemberList.scss' as *;
</style>