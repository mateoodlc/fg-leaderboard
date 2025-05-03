<template>
  <Header @refresh="gameStore.fetchMembers" />
  <main class="main-content">
    <GameMemberList />
  </main>
</template>

<script lang="ts" setup>
import Header from '../../components/Header/Header.vue'
import GameMemberList from '../../components/GameMemberList/GameMemberList.vue'
import { useGameStore } from '../../stores/useGameStore'

defineOptions({
  name: 'dashboard',
});
const gameStore = useGameStore();

</script>