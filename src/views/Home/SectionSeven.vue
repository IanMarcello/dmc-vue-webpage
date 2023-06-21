<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Grid, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

const modules = [Grid, Pagination]
</script>

<template>
  <section>
    <div class="w-full 4xl:flex 4xl:justify-center bg-theme-100 py-20">
      <div class="4xl:w-[2000px]">
        <div class="flex flex-col justify-center items-center">
          <div id="gallery" class="font-bold text-5xl">Gallery</div>
          <div class="border border-theme-400 mt-5 w-10"></div>
        </div>

        <div class="mt-14 px-48">
          <swiper
            :slidesPerView="3"
            :grid="{
              rows: 2,
              fill: 'row',
            }"
            :spaceBetween="10"
            :pagination="{
              clickable: true
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide class="">Slide 1</swiper-slide>
            <swiper-slide class="">Slide 2</swiper-slide>
            <swiper-slide class="">Slide 3</swiper-slide>
            <swiper-slide class="">Slide 4</swiper-slide>
            <swiper-slide class="">Slide 5</swiper-slide>
            <swiper-slide class="">Slide 6</swiper-slide>
            <swiper-slide class="">Slide 7</swiper-slide>
            <swiper-slide class="">Slide 8</swiper-slide>
            <swiper-slide class="">Slide 9</swiper-slide>
            <swiper-slide class="">Slide 10</swiper-slide>
            <swiper-slide class="">Slide 11</swiper-slide>
            <swiper-slide class="">Slide 12</swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
