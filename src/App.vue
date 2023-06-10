<script setup>
import { RouterView } from 'vue-router'
import ScrollToTopIcon from '@/components/ScrollToTopIcon.vue'
</script>

<template>
  <ScrollToTopIcon />
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <Component :is="Component" />
    </Transition>
  </RouterView>
</template>
