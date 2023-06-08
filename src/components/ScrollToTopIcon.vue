<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import IcRoundArrowUpward from "~icons/ic/round-arrow-upward";

const active = ref(false);

const scrollBacktoTop = () => {
  if (window.scrollY > 100) {
    active.value = true;
  } else {
    active.value = false;
  }
};

onMounted(() => {
  window.addEventListener("load", scrollBacktoTop);
  document.addEventListener("scroll", scrollBacktoTop);
});

onBeforeUnmount(() => {
  window.addEventListener("load", scrollBacktoTop);
  document.addEventListener("scroll", scrollBacktoTop);
});
</script>

<template>
  <div
    v-scroll-to="{
      el: 'body',
      container: 'body',
      duration: 300,
      easing: 'linear',
      offset: -200,
      force: true,
      cancelable: true,
      x: false,
      y: true,
    }"
    class="bg-dark-700 fixed bottom-5 p-3 rounded-md right-5 transition-all ease-in duration-200 hover:bg-dark-800 cursor-pointer z-50"
    :class="active ? 'opacity-1' : 'opacity-0'"
  >
    <IcRoundArrowUpward />
  </div>
</template>
