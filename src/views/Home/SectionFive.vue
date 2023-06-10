<script setup>
import PreOrderButton from '@/components/PreOrderButton.vue'
</script>

<template>
  <section>
    <div class="w-full 4xl:flex 4xl:justify-center bg-[#16191f] py-20">
      <div class="4xl:w-[2000px]">
        <div class="flex flex-col justify-center items-center">
          <div id="system" class="font-bold text-5xl">System</div>
          <div class="border border-[#2d3035] mt-5 w-10"></div>
        </div>

        <div class="flex flex-row"></div>
      </div>
    </div>
    <div class="w-full py-7 z-20 flex justify-center items-center">
      <PreOrderButton />
    </div>
  </section>
</template>
