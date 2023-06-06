<script setup>
import CibPlaystation from '~icons/cib/playstation'
import CibPlaystation4 from '~icons/cib/playstation4'
import CibXbox from '~icons/cib/xbox'
import CibSteam from '~icons/cib/steam'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import 'swiper/css'

import 'swiper/css/navigation'

register()

const modules = [Navigation]
</script>

<template>
  <section class="">
    <div class="h-full bg-[#16191f] py-14">
      <div class="flex flex-col justify-center items-center">
        <div class="font-bold text-5xl">Media</div>
        <div class="border border-[#2d3035] mt-5 w-10"></div>
      </div>

      <div class="mt-14 flex justify-between px-48">
        <div>
          <div class="flex justify-center">
            <div class="w-[600px]">
              <img src="@/assets/images/media/1.jpg" alt="Devil May Cry 5 Logo" />
            </div>
          </div>

          <div class="flex flex-col justify-center items-center mt-5">
            <div class="font-bold text-xl">The Devil May Cry 5 Demo is Live!</div>
            <div class="border border-[#2d3035] mt-5 w-10"></div>
          </div>

          <div class="flex justify-center gap-x-10 mt-5">
            <div class="flex group items-center cursor-pointer">
              <CibPlaystation class="w-7 h-7 group-hover:text-[#449ca2] transition-colors ease-in-out duration-200" />
              <span class="font-playstation_regular uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-[#449ca2] group-hover:to-[#e63f33] group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200">PS4</span>
            </div>
            <div class="flex group items-center cursor-pointer">
              <CibXbox class="w-7 h-7 group-hover:text-[#449ca2] transition-colors ease-in-out duration-200" />
              <span
                class="font-xbox uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-[#449ca2] group-hover:to-[#e63f33] group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200"
                >XBOX ONE</span
              >
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-center">
            <div class="w-[600px]">
              <img src="@/assets/images/media/2.jpg" alt="Devil May Cry 5 Logo" />
            </div>
          </div>

          <div class="flex flex-col justify-center items-center mt-5">
            <div class="font-bold text-xl">The Devil May Cry 5 Collector's Edition</div>
            <div class="border border-[#2d3035] mt-5 w-10"></div>
          </div>

          <div class="flex justify-center gap-x-10 mt-5">
            <div class="flex group items-center cursor-pointer">
              <CibPlaystation class="w-7 h-7 group-hover:text-[#449ca2] transition-colors ease-in-out duration-200" />
              <span class="font-playstation_regular uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-[#449ca2] group-hover:to-[#e63f33] group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200">PS4</span>
            </div>
            <div class="flex group items-center cursor-pointer">
              <CibXbox class="w-7 h-7 group-hover:text-[#449ca2] transition-colors ease-in-out duration-200" />
              <span
                class="font-xbox uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-[#449ca2] group-hover:to-[#e63f33] group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200"
                >XBOX ONE</span
              >
            </div>
            <div class="flex group items-center cursor-pointer">
              <CibSteam class="w-7 h-7 group-hover:text-[#449ca2] transition-colors ease-in-out duration-200" />
              <span class="font-steam font-bold tracking-wider uppercase text-xl ml-2 group-hover:bg-gradient-to-r group-hover:from-[#449ca2] group-hover:to-[#e63f33] group-hover:bg-clip-text group-hover:text-transparent transition-colors ease-in-out duration-200">STEAM</span>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="mt-10">
        <swiper
          :loop="true"
          :slidesPerView="3"
          :spaceBetween="30"
          :navigation="true"
          :modules="modules"
          class="h-full"
        >
          <swiper-slide>
            <div class="flex justify-center items-center h-fit">
              <img
                class="h-[300px]"
                src="@/assets/images/characters/dante/dante.png"
                alt="Sample 1"
              />
            </div>
          </swiper-slide>
          <swiper-slide class="">
            <div class="flex justify-center items-center h-fit">
              <img
                class="h-[300px]"
                src="@/assets/images/characters/vergil/vergil.png"
                alt="Sample 2"
              />
            </div>
          </swiper-slide>
          <swiper-slide class="">
            <div class="flex justify-center items-center h-fit">
              <img
                class="h-[300px]"
                src="@/assets/images/characters/lady/lady.png"
                alt="Sample 3"
              />
            </div>
          </swiper-slide>
          <swiper-slide class="">
            <div class="flex justify-center items-center h-fit">
              <img
                class="h-[300px]"
                src="@/assets/images/characters/nero/nero.png"
                alt="Sample 4"
              />
            </div>
          </swiper-slide>
          <swiper-slide class="">
            <div class="flex justify-center items-center h-fit">
              <img class="h-[300px]" src="@/assets/images/characters/v/v.png" alt="Sample 5" />
            </div>
          </swiper-slide>
          <swiper-slide class="">
            <div class="flex justify-center items-center h-fit">
              <img
                class="h-[300px]"
                src="@/assets/images/characters/trish/trish.png"
                alt="Sample 6"
              />
            </div>
          </swiper-slide>
          <swiper-slide class="">
            <div class="flex justify-center items-center h-fit">
              <img
                class="h-[300px]"
                src="@/assets/images/characters/nico/nico.png"
                alt="Sample 7"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div> -->
    </div>
  </section>
</template>
