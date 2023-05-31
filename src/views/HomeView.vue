<script setup>
import NavView from "@/views/Nav/NavView.vue";
</script>

<template>
  <section id="section_1">
    <div class="w-full h-[90vh] bg-[#16191f]">
      <div class="flex flex-col h-full px-32">
        <NavView />
        <div class="border w-full h-full flex flex-col justify-center items-center my-16">
          CONTENT
        </div>
      </div>
    </div>
    <div class="w-full h-[10vh] flex justify-center items-center">
      <div>
        <button class="btn-gradient relative text-xl px-7 py-2">PRE-ORDER</button>
      </div>
    </div>
  </section>
</template>

<style>
.btn-gradient {
  background: hsla(184, 41%, 45%, 1);

  background: linear-gradient(315deg, hsla(184, 41%, 45%, 1) 20%, hsla(4, 78%, 55%, 1) 70%);

  background: -moz-linear-gradient(315deg, hsla(184, 41%, 45%, 1) 20%, hsla(4, 78%, 55%, 1) 70%);

  background: -webkit-linear-gradient(315deg, hsla(184, 41%, 45%, 1) 20%, hsla(4, 78%, 55%, 1) 70%);

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#449BA2", endColorstr="#E63D32", GradientType=1 );
}
</style>
