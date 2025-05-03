<template>
  <div class="icon">
    <template v-if="marketItem.toLowerCase().includes('badge')">
      <Badge />
    </template>
    <template v-else-if="marketItem.toLowerCase().includes('level')">
      <Cup />
    </template>
    <template v-else-if="marketItem.toLowerCase().includes('gold')">
      <Gold />
    </template>
    <template v-else-if="marketItem.toLowerCase().includes('delay')">
      <Timer />
    </template>
    <template v-else-if="marketItem.toLowerCase().includes('recovery')">
      <Recovery />
    </template>
    <template v-else-if="marketItem.toLowerCase().includes('reveal')">
      <Reveal />
    </template>
    <template v-else-if="marketItem.toLowerCase().includes('rod')">
      <Rod />
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Badge from './Badge.vue';
import Cup from './Cup.vue';
import Gold from './Gold.vue';
import Timer from './Timer.vue';
import Recovery from './Recovery.vue';
import Reveal from './Reveal.vue';
import Rod from './Rod.vue';

defineProps<{
  marketItem: string
}>();
</script>