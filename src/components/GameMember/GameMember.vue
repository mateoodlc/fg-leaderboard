<template>
  <div class="game-member">
    <h4 class="game-member__name">
      <span class="game-member__rank">{{ getRankSuffix(member.rank) }}</span>
      <span class="game-member__username">{{ ` ${member.username}` }}</span>
    </h4>
    <div class="game-member__info">
      <div class="game-member__level">
        <span class="game-member__level-number">{{ member.level }}</span>
        <div class="game-member__experience">
          <span class="game-member__experience-bar" :style="styleObject"></span>
          <span class="game-member__experience-number">EXP: {{ getFormattedNumber(member.xp) }}</span>
          </div>
      </div>
      <div class="game-member__gold">
        <Gold class="game-member__gold-icon" />
        <span class="game-member__gold-text game-member__info-text">{{ getFormattedNumber(member.gold) }}</span>
      </div>
      <div class="game-member__status">
        <Biohazard class="game-member__status-icon" :class="{'game-member__status-icon--infected' : member.isInfected}" />
        <span class="game-member__status-text game-member__info-text">{{ member.isInfected ? 'Infected' : 'Healthy' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Gold from '../../assets/icons/Gold.vue'
import Biohazard from '../../assets/icons/Biohazard.vue'
import type { GameMemberType } from '../../types'
import { ref, onMounted } from 'vue'
import getFormattedNumber from '../../utils/NumberFormatter'
const props = defineProps<{
  member: GameMemberType,
  maxXP: number
}>()

const styleObject = ref();

const getRankSuffix = (rank: number): string => {
  const ranks = ['st', 'nd', 'rd', 'th'];
  if (rank % 10 === 1 && rank % 100 !== 11) {
    return `${rank}${ranks[0]}`;
  } else if (rank % 10 === 2 && rank % 100 !== 12) {
    return `${rank}${ranks[1]}`;
  } else if (rank % 10 === 3 && rank % 100 !== 13) {
    return `${rank}${ranks[2]}`;
  } else {
    return `${rank}${ranks[3]}`;
  }
}

onMounted(() =>{
  setTimeout(() => {
    styleObject.value = {
      transform: `scaleX(${props.member.xp / props.maxXP})`,
    }
  }, 400)
})
</script>

<style lang="scss" scoped>
@use './gameMember.scss' as *;
</style>